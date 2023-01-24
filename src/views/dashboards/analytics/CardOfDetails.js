import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Box } from '@mui/material'

const CardOfDetails = () => {
  return (
    <div>
      <Card>
        <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/glass-house.png' />
        {/* <CardContent>
          <Typography variant='h6' sx={{ mb: 2 }}>
            Influencing The Influencer
          </Typography>
          <Typography variant='body2'>
            Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister
            predicts Cancun will draw as many visitors in 2006 as it did two years ago.
          </Typography>
        </CardContent> */}
        <Grid container>
          <CardContent>
            <form onSubmit={e => e.preventDefault()}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Full Name'
                    placeholder='Full Name'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Icon icon='tabler:user' />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    placeholder='carterleonard@gmail.com'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Icon icon='tabler:mail' />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type='number'
                    label='Phone No.'
                    placeholder='+1-123-456-8790'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Icon icon='tabler:phone' />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    label='Message'
                    placeholder='Bio...'
                    sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Icon icon='tabler:message' />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Website'
                    placeholder='Website'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Icon icon='tabler:language' />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Langauge</InputLabel>
                    <Select
                      label='Langauge'
                      defaultValue=''
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                    >
                      <MenuItem value='UK'>English</MenuItem>
                      <MenuItem value='USA'>Arabic</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <div className='flex-between'>
                    <Button type='submit' variant='contained' size='large'>
                      Edit
                    </Button>
                    <Button type='submit' variant='contained' size='large'>
                      View
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Grid>
      </Card>
    </div>
  )
}

export default CardOfDetails
