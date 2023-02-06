import { useEffect, useState } from 'react'

// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardOfDetails from 'src/views/dashboards/analytics/CardOfDetails'
import CardStatisticsTransactions from 'src/views/ui/cards/statistics/CardStatisticsTransactions'
import ApexLineChart from 'src/views/charts/apex-charts/ApexLineChart'
import CardAppleWatch from 'src/views/ui/cards/basic/CardAppleWatch'

const url_main = 'https://qtap-dashboard.qutap.co'

const AnalyticsDashboard = ({ productsData }) => {
  const [tokenQTap, setTokenQTap] = useState(null)

  useEffect(() => {
    setTokenQTap(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null)
  }, [])

  console.log(productsData)

  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={4}>
            <CardOfDetails />
          </Grid>
          <Grid item xs={12} md={6} lg={8} container spacing={5}>
            <Grid item xs={12}>
              <CardStatisticsTransactions />
            </Grid>
            <Grid item xs={12}>
              <ApexLineChart />
            </Grid>
          </Grid>
        </Grid>
      </KeenSliderWrapper>
      <KeenSliderWrapper>
        <h2>Store</h2>
        <Grid container spacing={6}>
          {productsData.data.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              {/* <CardAppleWatch /> */}
              <CardAppleWatch item={item} />
            </Grid>
          ))}
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard

export async function getStaticProps() {
  const productsData = await fetch(`${url_main}/api/products`, {
    headers: {
      'Content-Type': 'application/json',
      lang: 'en'
    }
  }).then(res => res.json())

  // const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(res => res.json())

  return {
    props: {
      productsData

      // cardsData
    }
  }
}
