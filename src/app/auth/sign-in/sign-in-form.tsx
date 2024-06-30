'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useFormState } from '@/hooks/useform-state'
import { AlertTriangle, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import googleIcon from '../../../../public/icons/google.svg'
import { sigInWithEmailAndPassword } from './actions'

const SignInForm = () => {
  const router = useRouter()

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    sigInWithEmailAndPassword,
    () => {
      router.push('/')
    },
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Sign In Failed!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" name="email" />
        {errors?.email && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors.email[0]}
          </p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" name="password" />
        <Link
          href="/auth/forgot-password"
          className="text-xs font-medium text-foreground hover:underline"
        >
          {errors?.password && (
            <p className="text-sm font-medium text-red-500 dark:text-red-400">
              {errors.password[0]}
            </p>
          )}
          Forgot your password?
        </Link>
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Sign in with e-mail'
        )}
      </Button>
      <Button variant="link" className="w-full" size="sm" asChild>
        <Link href="/auth/sign-up">Create new account</Link>
      </Button>
      <Separator />
      <Button type="submit" variant="outline" className="w-full">
        <Image src={googleIcon} alt="Google Icon" className="size-4 mr-2" />
        Sign in with Google
      </Button>
    </form>
  )
}

export default SignInForm
