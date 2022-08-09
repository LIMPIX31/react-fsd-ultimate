import { render, screen } from '@testing-library/react'
import { Home } from 'components/pages/Home'
import { defaultTheme } from 'global/theme'
import { ThemeProvider } from 'styled-components'

describe('Home page', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    )
    expect(screen.queryByText('Content here')).toBeInTheDocument()
  })
})
