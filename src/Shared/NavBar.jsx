import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Karnaphuli Suites</Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/booking">Booking</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signUp">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
