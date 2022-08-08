import styled, { css } from 'styled-components'

export interface TextProps {
  bold?: boolean
  boldness?: number
  italic?: boolean
  underline?: boolean
  size?: string
  block?: boolean
  center?: boolean
  right?: boolean
  left?: boolean
  noSelect?: boolean
}

const boldStyle = css`
  font-weight: bold;
`
const boldnessStyle = (boldness: number) => css`
  font-weight: ${boldness};
`
const italicStyle = css`
  font-style: italic;
`
const underlineStyle = css`
  text-decoration: underline;
`
const sizeStyle = (size: string) => css`
  font-size: ${size};
`
const blockStyle = css`
  display: block;
`
const centerStyle = css`
  text-align: center;
`
const rightStyle = css`
  text-align: right;
`
const leftStyle = css`
  text-align: left;
`
const noSelectStyle = css`
  user-select: none;
  cursor: default;
`

export const Text = styled.span<TextProps>`
  display: inline-block;
  color: ${({ theme }) => theme.palette.text};
  ${({ bold, boldness, italic, underline, size, block, center, right, left, noSelect }) => css`
    ${noSelect && noSelectStyle}
    ${bold && boldStyle}
    ${boldness && boldnessStyle(boldness)}
    ${italic && italicStyle}
    ${underline && underlineStyle}
    ${size && sizeStyle(size)}
    ${block && blockStyle}
    ${center && centerStyle}
    ${right && rightStyle}
    ${left && leftStyle}
  `}
`
