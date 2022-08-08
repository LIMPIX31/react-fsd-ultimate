import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { Home } from 'components/pages/Home'
import { SemanticLayout } from 'components/utils/SemanticLayout'
import { Header } from 'components/macro/Header'
import { Footer } from 'components/macro/Footer'

export const App: FC = () => {
  return (
    <SemanticLayout>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
      <Footer />
    </SemanticLayout>
  )
}
