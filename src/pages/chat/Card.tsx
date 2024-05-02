import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 300 }} elevation={1}>
      <CardContent>
        <Typography variant='h6' component='div'>
          Generate an idea
        </Typography>
        <Typography color='text.secondary'>What color is the sky?</Typography>
      </CardContent>
    </Card>
  )
}
