// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardAppleWatch = ({ item }) => {
  return (
    <Card>
      <CardMedia sx={{ height: '18.375rem' }} image={item.image} />
      <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ mb: 2 }}>
          {item.title}
        </Typography>
        <Typography sx={{ mb: 2 }}>LE {item.price}</Typography>
        <Typography variant='body2'>{item.description}</Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Add To Cart
      </Button>
    </Card>
  )
}

export default CardAppleWatch
