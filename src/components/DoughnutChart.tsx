'use client'

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const numbers = accounts.map((account) => account.currentBalance)
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: numbers,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
    labels: ['Bank of America', 'Chase', 'Wells Fargo'],
  }
  return (
    <Doughnut
      data={data}
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: false,
            position: 'right',
          },
        },
      }}
    />
  )
}

export default DoughnutChart
