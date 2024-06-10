'use server'
import { signIn } from '@/auth'
import { db } from '@/db'
import { user } from '@/db/schema'
import bcrypt from 'bcrypt'

export async function signUpUser(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  await db.insert(user).values({ email, password: hashedPassword })

  await signIn('credentials', formData)
}
