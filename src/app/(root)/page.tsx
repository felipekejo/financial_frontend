import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = { firstName: 'Felipe' }

  const accounts = [
    {
      id: 'string',
      availableBalance: 1234,
      currentBalance: 1234,
      officialName: 'string',
      mask: 'string',
      institutionId: 'string',
      name: 'string',
      type: 'string',
      subtype: 'string',
      appwriteItemId: 'string',
      shareableId: 'string',
    },
    {
      id: 'string',
      availableBalance: 1234,
      currentBalance: 3454,
      officialName: 'string',
      mask: 'string',
      institutionId: 'string',
      name: 'string',
      type: 'string',
      subtype: 'string',
      appwriteItemId: 'string',
      shareableId: 'string',
    },
    {
      id: 'string',
      availableBalance: 1234,
      currentBalance: 3454,
      officialName: 'string',
      mask: 'string',
      institutionId: 'string',
      name: 'string',
      type: 'string',
      subtype: 'string',
      appwriteItemId: 'string',
      shareableId: 'string',
    },
  ]
  return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName}
            subtext="Access and manage your finances"
          />
          <TotalBalanceBox
            accounts={accounts}
            totalBanks={1}
            totalCurrentBalance={100000}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar />
    </section>
  )
}

export default Home
