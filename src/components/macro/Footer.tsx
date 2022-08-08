import { FC } from 'react'
import styled from 'styled-components'
import { Content } from 'components/utils/Content'
import { Text } from 'components/micro/Text'

const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  height: 100px;
`

const FooterContent = styled(Content)`
  display: flex;
  align-items: center;
  height: 100%;
`

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <FooterContent center mediaPadding>
        <Text>Copyright © 2022</Text>
      </FooterContent>
    </StyledFooter>
  )
}
