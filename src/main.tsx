import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'global/theme'
import { App } from 'App'
import { GlobalStyle } from 'global/GlobalStyle'
import { Fonts } from 'global/fonts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Fonts />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
