import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const linkStyle = css`
  color: ${props => props.theme.palette.primary};
  text-decoration: underline;
  cursor: pointer;
`

export const ExternalLink = styled.a`
  ${linkStyle}
`

export const RouteLink = styled(NavLink)`
  ${linkStyle}
`
