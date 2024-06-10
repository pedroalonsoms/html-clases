import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { paths } from '@/const/paths'
import { auth, signOut } from '@/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick & Morty',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-800 text-base text-slate-50`}
      >
        <main>
          {!!session?.user && (
            <nav className='flex justify-center bg-slate-500 px-2 py-2'>
              <div className='flex gap-10'>
                <Link href={paths.allCharacters}>All characters</Link>
                <Link href={paths.favoriteCharacters}>Favorite characters</Link>
                <form
                  action={async () => {
                    'use server'
                    await signOut({ redirectTo: '/sign-in' })
                  }}
                >
                  <button type='submit'>Sign Out</button>
                </form>
              </div>
            </nav>
          )}
          {children}
        </main>
      </body>
    </html>
  )
}
