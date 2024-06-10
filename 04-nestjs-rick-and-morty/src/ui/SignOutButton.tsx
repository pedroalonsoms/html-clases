'use client'
import { paths } from '@/const/paths'
import { signOutUser } from '@/services/signOutUser'
import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const router = useRouter()

  return (
    <form
      action={async () => {
        await signOutUser()
        router.push(paths.signIn)
      }}
    >
      <button type='submit'>Sign Out</button>
    </form>
  )
}
