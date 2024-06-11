import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import googleIcon from '../../../../public/icons/google.svg'

const SignUp = () => {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" name="email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Password</Label>
        <Input
          id="password_confirmation"
          type="password"
          name="password_confirmation"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Confirm your Password</Label>
        <Input id="password" type="password" name="password" />
      </div>
      <Button type="submit" className="w-full">
        Create Account
      </Button>
      <Button variant="link" className="w-full" size="sm" asChild>
        <Link href="/auth/sign-in">Already registered? Sign in</Link>
      </Button>
      <Separator />
      <Button type="submit" variant="outline" className="w-full">
        <Image src={googleIcon} alt="Google Icon" className="size-4 mr-2" />
        Sign up with Google
      </Button>
    </form>
  )
}

export default SignUp
