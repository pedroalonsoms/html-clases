'use client'

import { signInUser } from '@/services/signInUser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const router = useRouter()

  return (
    <div className='grid place-content-center pt-20'>
      <p className='text-3xl font-medium'>Sign In Page</p>

      <form
        action={async (formData: FormData) => {
          await signInUser(formData)
          router.push('/all-characters')
        }}
        className='flex flex-col gap-5 pt-10'
      >
        <div className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            className='rounded-sm text-black'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            className='rounded-sm text-black'
          />
        </div>

        <button className='rounded-sm bg-slate-900 py-1'>Sign In</button>
      </form>

      <p className='pt-10'>
        Not registered?{' '}
        <Link className='hover:underline' href={'/sign-up'}>
          Sign Up
        </Link>
      </p>
    </div>
  )
}
