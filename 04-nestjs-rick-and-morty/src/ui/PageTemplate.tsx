import { PropsWithChildren } from 'react'

export function PageTemplate({ children }: PropsWithChildren) {
  return (
    <main className='flex flex-col items-center justify-between'>
      {children}
    </main>
  )
}
