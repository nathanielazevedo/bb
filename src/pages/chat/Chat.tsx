import { Box, Fade, TextField, Typography } from '@mui/material'
import * as React from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Grid from '@mui/material/Grid'
import Card from './Card'
import UploadButton from './UploadButton'
import InsightsIcon from '@mui/icons-material/Insights'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import FormControl from '@mui/material/FormControl'

const Chat = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flexGrow: 1,
      }}
    >
      <Fade in timeout={1000}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '25px',
              flexGrow: 1,
            }}
          >
            <InsightsIcon sx={{ fontSize: '50px' }} />
            <Typography variant='h5'>How can I help you today?</Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                gap: '25px',
              }}
            >
              <Card />
              <Card />
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                gap: '25px',
                mt: '25px',
                mb: '55px',
              }}
            >
              <Card />
              <Card />
            </Box>
          </Box>
        </Box>
      </Fade>
      <Grid container spacing={2} alignItems='center' width={'100%'} mb={1}>
        <Grid item>
          <UploadButton />
        </Grid>
        <Grid item flexGrow={1}>
          <FormControl fullWidth variant='outlined'>
            <OutlinedInput
              id='outlined-adornment-password'
              type={'text'}
              placeholder='Ask me anything.'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    edge='end'
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Chat
