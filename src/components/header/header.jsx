import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsCart3, BsPerson } from 'react-icons/bs'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky='top'> 
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className='fw-bold'>
          Incolar
        </Navbar.Brand>

        {/* Botão hamburguer (mobile) */}
        <Navbar.Toggle aria-controls="menu-principal" />

        {/* Menu */}
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
          </Nav>

          {/*Busca*/}
          <Form className='d-flex me-3 my-2 my-lg-0'>
            <FormControl type='search' placeholder='Buscar produto' className='me-2'/>
            <Button variant='outline-light'>Buscar</Button>
          </Form>

          {/* Icones */}
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

export default Header
