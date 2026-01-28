{/*
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsCart3, BsPerson } from 'react-icons/bs'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky='top'> 
      <Container fluid>
        {/* Logo AQUI FALTA ASTERISCO /}
        <Navbar.Brand as={Link} to="/" className='fw-bold'>
          Incolar
        </Navbar.Brand>

        {/* Botão hamburguer (mobile) AQUI FALTA ASTERISCO /}
        <Navbar.Toggle aria-controls="menu-principal" />

        {/* Menu AQUI FALTA ASTERISCO /}
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto align-items-center gap-3">
            {/*<Nav.Link as={Link} to="/">Home</Nav.Link>/}
            <Nav.Link as={Link} to="/beleza">Beleza</Nav.Link>
            <Nav.Link as={Link} to="/casa">Casa</Nav.Link>            
            <Nav.Link as={Link} to="/eletronicos">Eletrônicos</Nav.Link>
            <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
          </Nav>

          {/*Busca AQUI FALTA ASTERISCO/}
          <Form className='d-flex me-3 my-2 my-lg-0'>
            <FormControl type='search' placeholder='Buscar produto' className='me-2'/>
            <Button variant='outline-light'>Buscar</Button>
          </Form>

          {/* Icones AQUI FALTA ASTERISCO /}
          <Nav>
            <Nav.Link as={Link} to="/login">
              <BsPerson size={20}></BsPerson>
            </Nav.Link>

            <Nav.Link as={Link} to="/carrinho">
              <BsCart3 size={20}></BsCart3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
*/}
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { BsCart3, BsPerson } from 'react-icons/bs'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>

        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Incolar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">

          {/* MENU DE CATEGORIAS */}
          <Nav className="me-4">

            <NavDropdown
              title="☰ Categorias"
              id="categorias-dropdown"
              menuVariant="dark"
            >
              {/* Estrutura já pronta para mega-menu */}
              <Container className="px-3">
                <Row>

                  <Col md={4}>
                    <h6 className="text-uppercase text-muted">Departamentos</h6>
                    <NavDropdown.Item as={Link} to="/beleza">
                      Beleza
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/casa">
                      Casa
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/eletronicos">
                      Eletrônicos
                    </NavDropdown.Item>
                  </Col>

                  <Col md={4}>
                    <h6 className="text-uppercase text-muted">Destaques</h6>
                    <NavDropdown.Item as={Link} to="/promocoes">
                      Promoções
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/lancamentos">
                      Lançamentos
                    </NavDropdown.Item>
                  </Col>

                  <Col md={4}>
                    <h6 className="text-uppercase text-muted">Conta</h6>
                    <NavDropdown.Item as={Link} to="/login">
                      Minha Conta
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/carrinho">
                      Carrinho
                    </NavDropdown.Item>
                  </Col>

                </Row>
              </Container>
            </NavDropdown>

          </Nav>

          {/* BUSCA */}
          <Form className="d-flex me-auto my-2 my-lg-0">
            <FormControl
              type="search"
              placeholder="Buscar produto"
              className="me-2"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>

          {/* ÍCONES */}
          <Nav className="ms-3 align-items-center gap-2">
            <Nav.Link as={Link} to="/login">
              <BsPerson size={20} />
            </Nav.Link>

            <Nav.Link as={Link} to="/carrinho">
              <BsCart3 size={20} />
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header




