import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface SidebarIconProps {
  label: string
  route: string
  imgURL: string
  pathname: string
}

const SidebarIcon = ({ label, route, imgURL, pathname }: SidebarIconProps) => {
  const isActive = pathname === route || pathname.startsWith(`${route}/`)
  return (
    <Link
      href={route}
      key={label}
      className={cn(
        'flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start',
        { 'bg-bankGradient': isActive },
      )}
    >
      <div className="relative size-6">
        <Image
          src={imgURL}
          alt={label}
          fill
          className={cn({
            'brightness-[3] invert-0': isActive,
          })}
        />
      </div>
      <p
        className={cn(
          'text-[16px] leading-[24px] font-semibold text-black-2 max-xl:hidden',
          {
            '!text-white': isActive,
          },
        )}
      >
        {label}
      </p>
    </Link>
  )
}

export default SidebarIcon
