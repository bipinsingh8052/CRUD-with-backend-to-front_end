import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComp(props) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href={props.home}>Home</Nav.Link>
        <Nav.Link href={props.display}>Display</Nav.Link>
        <Nav.Link href={props.insert}>Insert</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
