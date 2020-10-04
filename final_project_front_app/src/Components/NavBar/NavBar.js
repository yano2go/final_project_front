import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";

export default function NavBar(props) {
  console.log(props);
  const username = localStorage.getItem("username");
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="blue">
        <NavDropdown>
          <NavDropdown.Item href="/cooking">cooking</NavDropdown.Item>
          <NavDropdown.Item href="/diy">diy</NavDropdown.Item>
          <NavDropdown.Item href="/programming">programming</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/artsandcrafts">
            arts and crafts
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Brand href="/">Learning in Gifs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/cooking">Cooking</Nav.Link>
            <Nav.Link href="/diy">DIY</Nav.Link>
            <Nav.Link href="/artsandcrafts">Arts and Crafts</Nav.Link>
            <Nav.Link href="/programming">Programming</Nav.Link>
            <Nav.Link href="/random">Random</Nav.Link>
            <Nav.Link href="/gifsearch">search for gifs!</Nav.Link>
          </Nav>

          <Nav>
            {props.isLoggedIn ? (
              <Nav.Link href="/profilepage">{username}</Nav.Link>
            ) : (
              <Nav.Link href="/signin"> Sign In!</Nav.Link>
            )}

            <Nav.Link onClick={props.logout} href="/">
              Log Out
            </Nav.Link>
            <Nav.Link href="/upload">Upload A Gif!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
