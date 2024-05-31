'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <>
      <CountUp end={amount / 100} duration={5} decimal="." prefix="AU" />
    </>
  )
}

export default AnimatedCounter
