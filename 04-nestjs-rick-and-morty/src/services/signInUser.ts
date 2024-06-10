'use server'
import { signIn } from '@/auth'

export async function signInUser(formData: FormData) {
  await signIn('credentials', formData)
}
