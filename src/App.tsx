import { Container, CssBaseline } from '@mui/material'
import Footer from './components/Footer/Footer'
import AppTheme from './theme/AppTheme'
import AppAppBar from './components/AppBar/AppBar'
import MainContent from './components/MainContent/MainContent'

function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
      </Container>
      <Footer />
    </AppTheme>
  )
}

export default App
