import { useContext } from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout();
  };
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Karnaphuli Suites</Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/booking">Booking</Nav.Link>
          {/* <Nav.Link href="/login">Login</Nav.Link> */}
          <Nav.Link href="/signUp">Sign Up</Nav.Link>
        </Nav>
      </Container>
      {user ? (
        <>
          <small>{user.email}</small>
          <Nav.Link onClick={handleSignOut} className="btn btn-sm border ms-2">
            Sign out
          </Nav.Link>
        </>
      ) : (
        <Nav.Link>
          <Link to="/login">Sign in</Link>
        </Nav.Link>
      )}
    </Navbar>
  );
};

export default NavBar;
