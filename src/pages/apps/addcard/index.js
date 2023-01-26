// ** React Imports
import { forwardRef, useEffect, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const url_main = 'http://q-tap-dashboard.technomasrsystems.com'

function index() {
  // To Get The Token
  const [tokenQTap, setTokenQTap] = useState(null)

  // States

  const [full_name, setFull_Name] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [type, setType] = useState('car')
  const [theme, setTheme] = useState('theme1')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [language, setlanguage] = useState('en')

  useEffect(() => {
    setTokenQTap(localStorage.getItem('token-q-tap') ? JSON.parse(localStorage.getItem('token-q-tap')) : null)
  }, [])

  const handleCreateCard = e => {
    e.preventDefault()

    const blog = {
      full_name,
      email,
      phone,
      title,
      language,
      website,
      theme,
      type
    }
    console.log(blog)
    console.log(tokenQTap.token)

    fetch(`${url_main}/api/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        lang: 'en',
        Authorization: `Bearer ${tokenQTap.token}`
      },
      body: JSON.stringify(blog)
    })
      .then(data => data.json())
      .then(res => {
        console.log('res', res)
        if (res.status === true) {
          setName('')
          setPhone('')
          setText('')
          setEmail('')
        }
      })
      .catch(error => alert(error))
  }

  return (
    <Card>
      <CardHeader title='Add Card' />
      <Divider sx={{ m: '0 !important' }} />
      <form onSubmit={handleCreateCard}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Card Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Full Name' onChange={e => setFull_Name(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Title' onChange={e => setTitle(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='email' label='Email' onChange={e => setEmail(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='number' label='Phone No.' onChange={e => setPhone(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Website (optional)' onChange={e => setWebsite(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Type</InputLabel>
                <Select
                  label='Type'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={e => setType(e.target.value)}
                >
                  <MenuItem value='business'>Business</MenuItem>
                  <MenuItem value='car'>Car</MenuItem>
                  <MenuItem value='event'>Event</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Theme</InputLabel>
                <Select
                  label='Theme'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={e => setTheme(e.target.value)}
                >
                  <MenuItem value='Theme1'>Theme 1</MenuItem>
                  <MenuItem value='Theme2'>Theme 2</MenuItem>
                  <MenuItem value='Theme3'>Theme 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Language</InputLabel>
                <Select
                  label='Language'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={e => setlanguage(e.target.value)}
                >
                  <MenuItem value='en'>English</MenuItem>
                  <MenuItem value='ar'>Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ m: '0 !important' }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button type='reset' size='large' color='secondary' variant='outlined'>
            Reset
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default index
