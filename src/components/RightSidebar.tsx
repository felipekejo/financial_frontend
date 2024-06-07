import Image from 'next/image'
import Link from 'next/link'
import BankCard from './BankCard'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important">
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-gradient-mesh bg-cover bg-no-repeat" />
        <div className="relative flex px-6 max-xl:justify-center">
          <div className="flex items-center justify-center absolute -top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="flex flex-col pt-24">
            <h1 className="text-[24px] leading-[30px] font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-[16px] leading-[24px] font-normal text-gray-600">
              {user.email}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between gap-8 px-6 py-8">
        <div className="flex w-full justify-between">
          <h2 className="text-[18px] leading-[22px] font-semibold text-gray-900">
            My Banks
          </h2>
          <Link href="/" className="flex gap-2">
            <Image src="./icons/plus.svg" width={20} height={20} alt="Plus" />
          </Link>
          <h2 className="text-[14px] leading-[20px] font-semibold text-gray-600">
            Add Bank
          </h2>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSidebar
