import Image from 'next/image'
import Link from 'next/link'

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizontal Logo"
            className="size=[24px] max-xl:size-14"
          />
          <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
            Horizon
          </h1>
        </Link>
        <Link
          href="/my-banks"
          className="mb-12 cursor-pointer items-center gap2"
        >
          <Image
            src="/icons/dollar-circle.svg"
            width={34}
            height={34}
            alt="My Banks"
            className="size=[24px] max-xl:size-14"
          />
          <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
            My Banks
          </h1>
        </Link>
        <Link
          href="/transaction-history"
          className="mb-12 cursor-pointer items-center gap2"
        >
          <Image
            src="/icons/transaction.svg"
            width={34}
            height={34}
            alt="Transaction History"
            className="size=[24px] max-xl:size-14"
          />
          <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
            Transaction History
          </h1>
        </Link>
        <Link
          href="/payment-transfer"
          className="mb-12 cursor-pointer items-center gap2"
        >
          <Image
            src="/icons/money-send.svg"
            width={34}
            height={34}
            alt="Transfer Funds"
            className="size=[24px] max-xl:size-14"
          />
          <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
            Transfer Funds
          </h1>
        </Link>
      </nav>
    </section>
  )
}

export default Sidebar
