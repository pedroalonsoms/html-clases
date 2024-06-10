'use client'

import { signUpUser } from '@/services/signUpUser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const router = useRouter()

  return (
    <>
      <p>Sign Up Page</p>
      <form
        action={async (formData: FormData) => {
          await signUpUser(formData)
          router.push('/all-characters')
        }}
      >
        <label>
          Email
          <input name='email' type='email' />
        </label>
        <label>
          Password
          <input name='password' type='password' />
        </label>
        <button>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link href={'/sign-in'}>Sign In</Link>
      </p>
    </>
  )
}
