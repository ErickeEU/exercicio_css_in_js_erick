import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import temaLight from './themes/light'
import { EstiloGlobal, Container } from './styles'

import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
      <EstiloGlobal />
      <ThemeProvider theme={temaLight}>
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
