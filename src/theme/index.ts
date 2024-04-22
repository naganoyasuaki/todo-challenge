'use client'

import { createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#000',
    },
    warning: {
      main: 'rgba(180,80,120,0.7)',
    },
    background: {
      default: 'rgba(190,190,180,0.4)',
    },
  },
})

export default theme
