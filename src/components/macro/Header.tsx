import { FC } from 'react'
import styled from 'styled-components'
import { Content } from 'components/utils/Content'
import { Icon } from 'components/micro/Icon'
import reactLogo from 'assets/img/react-logo.svg'
import { Text } from 'components/micro/Text'
import { ExternalLink } from 'components/micro/Link'

const StyledHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  height: 80px;
`

const HeaderContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderContent center mediaPadding>
        <Icon src={reactLogo} />
        <Text as={'h5'}>Hello Modern React!</Text>
        <ExternalLink href={'https://github.com/LIMPIX31/ModernReactTemplate'}>Github</ExternalLink>
      </HeaderContent>
    </StyledHeader>
  )
}
