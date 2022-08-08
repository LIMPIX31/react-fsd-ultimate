import { css } from 'styled-components'

export const font = (name?: string) => css`
  font-family: ${({ theme }) => name ?? theme.fonts.default}, sans-serif;
`

export const fontFace = (name: string, src?: string, ext = 'ttf') => css`
  @font-face {
    font-family: ${name};
    src: url(assets/fonts/${src ?? name}.${ext});
  }
`
