import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

export const GlobalStyle = createGlobalStyle`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a, button {
    cursor: revert;
  }

  ol, ul, menu {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  input, textarea {
    -webkit-user-select: auto;
  }

  textarea {
    white-space: revert;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  ::placeholder {
    color: unset;
  }

  :where([hidden]) {
    display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  html, body {
    position: relative;
    min-height: 100vh;
    background: ${({ theme }) => theme.palette.background};
    z-index: 1;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
    font-size: 14px;
  }
  
  #root {
    height: 100vh !important;
  }
  
  h1 {
    font-size: 6rem;
  }
  
  h2 {
    font-size: 5rem;
  }
  
  h3 {
    font-size: 4rem;
  }
  
  h4 {
    font-size: 3rem;
  }
  
  h5 {
    font-size: 2rem;
  }
  
  h6 {
    font-size: 1rem;
  }
  
  span, p {
    font-size: 1rem;
  }
  
  *::selection {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.2)};
  }
  
  img {
    user-select: none;
    cursor: default;
  }
`
