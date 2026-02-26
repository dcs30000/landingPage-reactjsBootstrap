import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* Importando o CSS */}
import './Home.css'

function Home() {
  return (
    <>
      {/* HERO / CAROUSEL */}
      <section className="home-hero">
        <Container fluid="xxl" className='px-0'>
          <Carousel>   
            <Carousel.Item>
              <img className='hero-image' src="/banner1.png" alt="Banner1" />
              <div className='hero-content2'>

              </div>
              {/*PRIMEIRA MANEIRA QUE FIZ O CAROUSEL*/}
              {/*<div className="hero-slide hero-slide-1">*/}
                {/*<Container className='hero-content'> {/* para centralizar melhor */}
                  {/*<h1>Bem-vindo à Incolar</h1>*/}
                  {/*<p>Os melhores produtos para sua casa e tecnologia</p>*/}
                  {/*<Button as={Link} to="/ofertas" variant="dark">
                    Ver Ofertas
                  </Button>
                </Container>
              {/*</d*/}
            </Carousel.Item>

            <Carousel.Item>
              <img className='hero-image' src="/banner2.png" alt="Banner2" />
              {/*<div className="hero-slide hero-slide-2">
                <Container className='hero-content'>
                  <h1>Novidades da Semana</h1>
                  <p>Lançamentos selecionados para você</p>
                  <Button as={Link} to="/novidades" variant="dark">
                    Conferir
                  </Button>
                </Container>
              </div>*/}
            </Carousel.Item>

            <Carousel.Item>
              <img className='hero-image' src="/banner3.png" alt="Banner3" />
            </Carousel.Item>

            <Carousel.Item>
              <img className='hero-image' src="/banner4.png" alt="Banner4" />
            </Carousel.Item>

            <Carousel.Item>
              <img className='hero-image' src="/banner5.png" alt="Banner4" />
            </Carousel.Item>

            <Carousel.Item>
              <img className='hero-image' src="/banner6.png" alt="Banner4" />
            </Carousel.Item>

            <Carousel.Item>
              <img className='hero-image' src="/banner7.png" alt="Banner4" />
            </Carousel.Item>

          </Carousel> 
        </Container>
      </section>
      
      {/* HERO / BANNER */}
      <section className="bg-light py-5 home-banner">
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
      <section className="py-5 home-categorias">
        <Container>
          <h2 className="mb-4">Categorias 1</h2>

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

      {/* CATEGORIAS 2 */}
      <section className="py-5">
        <Container>
          <h2 className="mb-4">Categorias 2</h2>

          <Row className="g-4">
            {['Eletrônicos', 'Casa', 'Beleza'].map((cat) => (
              <Col md={4} key={cat}>
                <Card className="h-100 category-card">
                  <Card.Body>
                    <Card.Title>{cat}</Card.Title>
                    <Card.Text>
                      Explore produtos da categoria {cat}.
                    </Card.Text>
                    <Button variant="outline-dark">Acessar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="mb-4">Produtos em destaque</h2>

          <Row className="g-4">
            <Col xs={12} sm={6} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Produto 1</Card.Title>
                  <Card.Text>Descrição breve</Card.Text>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Produto 2</Card.Title>
                  <Card.Text>Descrição breve</Card.Text>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Produto 3</Card.Title>
                  <Card.Text>Descrição breve</Card.Text>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={3}>
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

       {/* PRODUTOS EM DESTAQUE 2 */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="mb-4">Produtos em destaque</h2>

          <Row className="g-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Col xs={12} sm={6} lg={3} key={item}>
                <Card className="product-card h-100">
                  <Card.Body>
                    <Card.Title>Produto {item}</Card.Title>
                    <Card.Text>Descrição breve do produto.</Card.Text>
                    <Button variant="dark">Comprar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* OFERTAS */}
      <section className="ofertas-section py-5">
          <Container>
            <div className="section-header">
              <h2>Ofertas imperdíveis</h2>
              <Link to="/ofertas" className="ver-todas">
                Ver todas →
              </Link>
            </div>

            <Row className="g-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Col xs={12} sm={6} lg={3} key={item}>
                  <Card className="oferta-card h-100">
                    <Card.Body>
                      <Card.Title>Produto {item}</Card.Title>

                      <div className="precos">
                        <span className="preco-antigo">R$ 299,90</span>
                        <span className="preco-novo">R$ 199,90</span>
                      </div>

                      <Button variant="danger" className="w-100 mt-3">
                        Comprar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
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
