'use server'
import { sigInWithPassword } from '@/http/sign-in-with-password'
import { HTTPError } from 'ky'
import { cookies } from 'next/headers'

import { z } from 'zod'

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please, provide a valid e-mail address.' }),
  password: z.string().min(1, { message: 'Please, provide a password.' }),
})

export async function sigInWithEmailAndPassword(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }

  const { email, password } = result.data

  try {
    const { token } = await sigInWithPassword({
      email,
      password,
    })

    cookies().set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()
      return { success: false, message, errors: null }
    }
    return {
      success: false,
      message: 'Unexpected error, try again later.',
      errors: null,
    }
  }
  return {
    success: true,
    message: null,
    errors: null,
  }
}
