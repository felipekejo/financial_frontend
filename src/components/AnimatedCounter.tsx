'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        end={amount / 100}
        duration={1}
        decimal="."
        prefix="AU$"
        decimals={2}
      />
    </div>
  )
}

export default AnimatedCounter
