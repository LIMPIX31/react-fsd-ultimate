import { createGlobalStyle } from 'styled-components'
import { fontFace } from 'components/utils/Font'

export const Fonts = createGlobalStyle`
  // Loads Rubik font from assets/fonts/Rubik.ttf
  ${fontFace('Rubik')}
  // Explicit font load
  // fontFace('Rubik', 'Rubik', 'ttf')
`
