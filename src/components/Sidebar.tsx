'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SidebarIcon from './SidebarIcon'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname()
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/neko.svg"
            width={34}
            height={34}
            alt="Horizontal Logo"
            className="size=[24px] max-xl:text-[14px] max-xl:leading-[20px] text-logo-1"
          />
          <h1 className="2xl:text-[26px] 2xl:leading-[32px] font-ibm-plex-serif font-bold text-black-1 max-xl:hidden">
            NekoFinance
          </h1>
        </Link>
        <SidebarIcon
          label="Home"
          route="/"
          imgURL="/icons/home.svg"
          pathname={pathname}
        />
        <SidebarIcon
          label="My Banks"
          route="/my-banks"
          imgURL="/icons/dollar-circle.svg"
          pathname={pathname}
        />
        <SidebarIcon
          label="Transaction History"
          route="/transaction-history"
          imgURL="/icons/transaction.svg"
          pathname={pathname}
        />
        <SidebarIcon
          label="Transfer Funds"
          route="/payment-transfer"
          imgURL="/icons/money-send.svg"
          pathname={pathname}
        />
        User
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar
