import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import bcrypt from 'bcrypt'
import { z } from 'zod'
import { db } from '@/db'
import { user as userSchema } from '@/db/schema'
import { eq } from 'drizzle-orm'

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string(), password: z.string() })
          .safeParse(credentials)

        if (!parsedCredentials.success) {
          return null
        }

        const { email, password } = parsedCredentials.data
        const [user] = await db
          .select()
          .from(userSchema)
          .where(eq(userSchema.email, email))

        const passwordsMatch = await bcrypt.compare(password, user.password)
        if (!passwordsMatch) {
          return null
        }

        return { id: user.id }
      },
    }),
  ],
})
