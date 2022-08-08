import styled from 'styled-components'

export const SemanticLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  header,
  footer {
    flex-shrink: 0;
    flex-grow: 0;
  }
  main {
    flex-grow: 1;
  }
`
