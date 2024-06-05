'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SidebarIconMobile from './SidebarIconMobile'

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname()
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="./icons/hamburger.svg"
            width={30}
            height={30}
            alt="Menu Icon"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="right" className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer items-center gap-1 px-4 flex"
          >
            <Image
              src="/icons/neko.svg"
              width={34}
              height={34}
              alt="Horizontal Logo"
            />
            <h1 className="text-[26px] leading-[32px] font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex gap-6 h-full flex-col pt-16 text-white">
                <SidebarIconMobile
                  label="Home"
                  route="/"
                  imgURL="/icons/home.svg"
                  pathname={pathname}
                />
                <SidebarIconMobile
                  label="My Banks"
                  route="/my-banks"
                  imgURL="/icons/dollar-circle.svg"
                  pathname={pathname}
                />
                <SidebarIconMobile
                  label="Transaction History"
                  route="/transaction-history"
                  imgURL="/icons/transaction.svg"
                  pathname={pathname}
                />
                <SidebarIconMobile
                  label="Transfer Funds"
                  route="/payment-transfer"
                  imgURL="/icons/money-send.svg"
                  pathname={pathname}
                />
                {user.name}
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}
export default MobileNav
