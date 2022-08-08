import { FC } from 'react'
import { Text } from 'components/micro/Text'
import { Content } from 'components/utils/Content'
import styled from 'styled-components'

const Page = styled.main`
  margin-top: 100px;
`

export const Home: FC = () => {
  return (
    <Page>
      <Content center mediaPadding>
        <Text as={'h1'} boldness={900}>
          Content here
        </Text>
        <Text as={'h1'} block>
          H1 Heading
        </Text>
        <Text as={'h2'} block>
          H2 Heading
        </Text>
        <Text as={'h3'} block>
          H3 Heading
        </Text>
        <Text as={'h4'} block>
          H4 Heading
        </Text>
        <Text as={'h5'} block>
          H5 Heading
        </Text>
        <Text as={'h6'} block>
          H6 Heading
        </Text>
        <Text as={'span'} block>
          Just default text
        </Text>
        <Text bold block>
          Bold text
        </Text>
        <Text italic block>
          Italic text
        </Text>
        <Text underline block>
          Underlined text
        </Text>
      </Content>
    </Page>
  )
}
