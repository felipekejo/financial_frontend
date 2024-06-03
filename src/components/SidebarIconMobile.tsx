import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { SheetClose } from './ui/sheet'

interface SidebarIconProps {
  label: string
  route: string
  imgURL: string
  pathname: string
}

const SidebarIconMobile = ({
  label,
  route,
  imgURL,
  pathname,
}: SidebarIconProps) => {
  const isActive = pathname === route || pathname.startsWith(`${route}/`)
  return (
    <SheetClose asChild>
      <Link
        href={route}
        key={label}
        className={cn(
          'flex gap-3 items-center p-4 rounded-lg w-full max-w-60',
          {
            'bg-bankGradient': isActive,
          },
        )}
      >
        <Image
          src={imgURL}
          alt={label}
          width={20}
          height={20}
          className={cn({
            'brightness-[3] invert-0': isActive,
          })}
        />

        <p
          className={cn(
            'text-[16px] leading-[24px] font-semibold text-black-2',
            {
              'text-white': isActive,
            },
          )}
        >
          {label}
        </p>
      </Link>
    </SheetClose>
  )
}

export default SidebarIconMobile
