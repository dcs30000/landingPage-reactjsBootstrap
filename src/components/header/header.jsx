import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg"> 
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          MinhaLogo
        </Navbar.Brand>

        {/* Botão hamburguer (mobile) */}
        <Navbar.Toggle aria-controls="menu-principal" />

        {/* Menu */}
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
