import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import theme from '@/theme'

import StoreProvider from './StoreProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <title>ToDo Challenge</title>
      <meta name="description" content="Todo List App" />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
