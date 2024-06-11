import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import googleIcon from '../../../../public/icons/google.svg'

const SignIn = () => {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" name="email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" name="password" />
        <Link
          href="/auth/forgot-password"
          className="text-xs font-medium text-foreground hover:underline"
        >
          Forgot your password?
        </Link>
      </div>
      <Button type="submit" className="w-full">
        Sign in
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

export default SignIn
