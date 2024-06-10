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
  },
} satisfies NextAuthConfig
