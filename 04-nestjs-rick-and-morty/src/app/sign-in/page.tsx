'use client'

import { signInUser } from '@/services/signInUser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignIn() {
  const [isError, setIsError] = useState<boolean>(false)
  const router = useRouter()

  return (
    <>
      {isError && (
        <p className='bg-slate-900 py-2 text-center'>
          There was an error signing in, please check your credentials
        </p>
      )}

      <div className='grid place-content-center pt-20'>
        <p className='text-3xl font-medium'>Sign In Page</p>

        <form
          action={async (formData: FormData) => {
            try {
              await signInUser(formData)
              router.push('/all-characters')
            } catch (error) {
              setIsError(true)
            }
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
              onChange={() => {
                setIsError(false)
              }}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              className='rounded-sm text-black'
              onChange={() => {
                setIsError(false)
              }}
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
    </>
  )
}
