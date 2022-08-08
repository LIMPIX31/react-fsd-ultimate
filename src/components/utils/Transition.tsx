import { css } from 'styled-components'

export const transition = (selector?: string, duration?: string) => css`
  transition: ${({ theme }) => `${selector ?? theme.transition.selector} ${duration ?? theme.transition.duration}`};
`
