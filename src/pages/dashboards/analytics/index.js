// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardOfDetails from 'src/views/dashboards/analytics/CardOfDetails'
import CardStatisticsTransactions from 'src/views/ui/cards/statistics/CardStatisticsTransactions'
import ApexLineChart from 'src/views/charts/apex-charts/ApexLineChart'

const AnalyticsDashboard = () => {
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
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
