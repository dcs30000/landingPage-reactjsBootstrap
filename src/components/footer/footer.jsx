import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          {/* Coluna 1 */}
          <Col md={4} className="mb-3">
            <h5>Minha Empresa</h5>
            <p>
              Criando soluções digitais com qualidade e foco no usuário.
            </p>
          </Col>

          {/* Coluna 2 */}
          <Col md={4} className="mb-3">
            <h5>Links rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/sobre" className="text-light text-decoration-none">Sobre</a></li>
              <li><a href="/contato" className="text-light text-decoration-none">Contato</a></li>
            </ul>
          </Col>

          {/* Coluna 3 */}
          <Col md={4} className="mb-3">
            <h5>Contato</h5>
            <p>Email: contato@site.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </Col>
        </Row>
      </Container>
        <hr className="border-secondary" />
      <Container>
        <div className="text-center">
          <small>© 2026 - Todos os direitos reservados</small>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

