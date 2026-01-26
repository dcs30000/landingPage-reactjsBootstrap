import { Container } from 'react-bootstrap'
import Home from '../../pages/Home'

function Main() {
  return (
    <main style={{margin: 0, padding: 0}}>
      <Container className="py-5">
        <Home />
      </Container>
    </main>
  )
}

export default Main
