'use client'

import { signUpUser } from '@/services/signUpUser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const router = useRouter()

  return (
    <div className='grid place-content-center pt-20'>
      <p className='text-3xl font-medium'>Sign Up Page</p>

      <form
        action={async (formData: FormData) => {
          await signUpUser(formData)
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

        <button className='rounded-sm bg-slate-900 py-1'>Sign Up</button>
      </form>

      <p className='pt-10'>
        Already have an account?{' '}
        <Link className='hover:underline' href={'/sign-in'}>
          Sign In
        </Link>
      </p>
    </div>
  )
}
