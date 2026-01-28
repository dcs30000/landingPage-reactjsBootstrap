import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* HERO / BANNER */}
      <section className="bg-light py-5">
        <Container>
          <h1 className="fw-bold mb-3">Bem-vindo à Incolar</h1>
          <p className="text-muted mb-4">
            Encontre produtos para sua casa, tecnologia, beleza e muito mais.
          </p>

          <Button as={Link} to="/eletronicos" variant="dark">
            Ver Eletrônicos
          </Button>
        </Container>
      </section>

      {/* CATEGORIAS */}
      <section className="py-5">
        <Container>
          <h2 className="mb-4">Categorias</h2>

          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Eletrônicos</Card.Title>
                  <Card.Text>
                    Tecnologia, gadgets e acessórios.
                  </Card.Text>
                  <Button as={Link} to="/eletronicos" variant="outline-dark">
                    Acessar
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Casa</Card.Title>
                  <Card.Text>
                    Tudo para seu lar.
                  </Card.Text>
                  <Button as={Link} to="/casa" variant="outline-dark">
                    Acessar
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Beleza</Card.Title>
                  <Card.Text>
                    Cuidados pessoais e estética.
                  </Card.Text>
                  <Button as={Link} to="/beleza" variant="outline-dark">
                    Acessar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="mb-4">Produtos em destaque</h2>

          <Row className="g-4">
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Produto 1</Card.Title>
                  <Card.Text>Descrição breve</Card.Text>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Produto 2</Card.Title>
                  <Card.Text>Descrição breve</Card.Text>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Produto 3</Card.Title>
                  <Card.Text>Descrição breve</Card.Text>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Produto 4</Card.Title>
                  <Card.Text>Descrição breve</Card.Text>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home


/*function Home() {
  return (
    <section>
      <h1>Bem-vindo ao meu site</h1>
      <p>
        Esta é a página inicial da minha aplicação SPA.
      </p>
    </section>
  )
}

export default Home*/
