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
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const url_main = 'https://qtap-dashboard.qutap.co/api'

function Index() {
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
  const [imgSrc, setImgSrc] = useState('/images/avatars/15.png')
  const [inputValue, setInputValue] = useState('')

  const ImgStyled = styled('img')(({ theme }) => ({
    width: 100,
    height: 100,
    marginRight: theme.spacing(6),
    borderRadius: theme.shape.borderRadius
  }))

  const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  }))

  const ResetButtonStyled = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      textAlign: 'center',
      marginTop: theme.spacing(2)
    }
  }))

  const handleInputImageChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
      if (reader.result !== null) {
        setInputValue(reader.result)
      }
    }
  }

  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('/images/avatars/15.png')
  }

  useEffect(() => {
    setTokenQTap(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null)
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

    let formData = new FormData()
    for (const [key, value] of Object.entries(blog)) {
      formData.append(key, value)
    }

    formData.append('photo', imgSrc)
    console.log(formData)
    console.log(tokenQTap.token)

    fetch(`${url_main}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        lang: 'en',
        Authorization: `Bearer ${tokenQTap.token}`
      },

      body: JSON.stringify(blog)

      // body: formData
    })
      .then(data => data.json())
      .then(res => {
        console.log('res', res)
        if (res.status === true) {
          setName('')
          setPhone('')
          setText('')
          setEmail('')
          window.location('/dashboards/analytics')
        }
      })
      .catch(error => alert(error))
  }

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Add Card' />
          {/* <Divider sx={{ m: '0 !important' }} /> */}
          <form onSubmit={handleCreateCard}>
            <CardContent sx={{ pt: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ImgStyled src={imgSrc} alt='Profile Pic' />
                <div>
                  <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                    Upload New Photo
                    <input
                      hidden
                      type='file'
                      value={inputValue}
                      accept='image/png, image/jpeg'
                      onChange={handleInputImageChange}
                      id='account-settings-upload-image'
                    />
                  </ButtonStyled>
                  <ResetButtonStyled color='secondary' variant='outlined' onClick={handleInputImageReset}>
                    Reset
                  </ResetButtonStyled>
                  <Typography sx={{ mt: 4, color: 'text.disabled' }}>Allowed PNG or JPEG. Max size of 800K.</Typography>
                </div>
              </Box>
            </CardContent>
            <Divider />
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
      </Grid>
    </Grid>
  )
}

export default Index
