import styled, { css } from 'styled-components'
import { media } from 'components/utils/Media'

export interface ContentProps {
  maxWidth?: string
  center?: boolean
  mediaPadding?: boolean
}

export const Content = styled.section<ContentProps>`
  max-width: ${({ theme, maxWidth }) => maxWidth ?? theme.constants.maxWidth};
  ${({ center }) => center && 'margin: 0 auto;'}
  ${({ theme, mediaPadding }) =>
    mediaPadding &&
    css`
      ${media(theme.constants.maxWidth)} {
        padding: 0 20px;
      }
    `}
`
