import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg"> 
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/">
          MinhaLogo
        </Navbar.Brand>

        {/* Botão hamburguer (mobile) */}
        <Navbar.Toggle aria-controls="menu-principal" />

        {/* Menu */}
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
