import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      if (isLoggedIn) {
        if (
          nextUrl.pathname.startsWith('/sign-in') ||
          nextUrl.pathname.startsWith('/sign-up')
        ) {
          return Response.redirect(new URL('/all-characters', nextUrl))
        }
        return true
      } else {
        if (
          nextUrl.pathname.startsWith('/sign-in') ||
          nextUrl.pathname.startsWith('/sign-up')
        ) {
          return true
        } else {
          return false
        }
      }
    },
    async jwt({ token, user: jwtUser, trigger }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (trigger === 'signIn') {
        token.id = jwtUser.id
      }

      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = token.id as string
      return session
    },
  },
} satisfies NextAuthConfig
