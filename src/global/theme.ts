export const defaultTheme = {
  palette: {
    primary: '#3D6AF7',
    background: '#1c1c1f',
    divider: '#28282c',
    text: '#fff',
  },
  transition: {
    selector: 'all',
    duration: '.3s',
  },
  constants: {
    maxWidth: '1200px',
  },
  fonts: {
    default: 'Rubik',
  },
}

export type ThemeType = typeof defaultTheme
