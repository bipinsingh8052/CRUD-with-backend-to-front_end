import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
export default function NavbarComp(props) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to={props.home}>Home</Nav.Link>
        <Nav.Link  as={Link} to={props.display}>Display</Nav.Link>
        <Nav.Link  as={Link} to={props.insert}>Insert</Nav.Link>
        <Nav.Link  as={Link} to={props.search}>search</Nav.Link>
        <Nav.Link  as={Link} to={props.update}>update</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
