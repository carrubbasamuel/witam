import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="home">Logo</Navbar.Brand>
        <Nav.Link href="#features">WITAM Srl</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="home">HOME</Nav.Link>
            <Nav.Link href="#deets">CHI SIAMO</Nav.Link>
            <Nav.Link href="contact">CONTATTACCI</Nav.Link>
            <Nav.Link href="#deets">I NOSTRI PARTNER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;