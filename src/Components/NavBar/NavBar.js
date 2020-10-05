import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";

export default function NavBar(props) {
  console.log(props);
  const username = localStorage.getItem("username");
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="blue">
        <NavDropdown title="Learning in Gifs">
          <NavDropdown.Item href="/cooking">cooking</NavDropdown.Item>
          <NavDropdown.Item href="/drinks">drinks</NavDropdown.Item>
          <NavDropdown.Item href="/programming">programming</NavDropdown.Item>
          <NavDropdown.Item href="/random">random</NavDropdown.Item>
          <NavDropdown.Item href="/signin">Log In</NavDropdown.Item>
          <NavDropdown.Item href="/artsandcrafts">
            arts and crafts
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/gifsearch">
            search for a gif!
          </NavDropdown.Item>
          <NavDropdown.Item href="/profilepage">your uploads</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/cooking">Cooking</Nav.Link>
            <Nav.Link href="/drinks">Drinks</Nav.Link>
            <Nav.Link href="/artsandcrafts">Arts and Crafts</Nav.Link>
            <Nav.Link href="/programming">Programming</Nav.Link>
            <Nav.Link href="/random">Random</Nav.Link>
            <Nav.Link href="/gifsearch">search for gifs!</Nav.Link>
          </Nav>

          <Nav>
            {props.isLoggedIn ? (
              <>
                {" "}
                <Nav.Link href="/profilepage">{username}'s uploads</Nav.Link>
                <Nav.Link onClick={props.logout} href="/">
                  Log Out
                </Nav.Link>
                <Nav.Link href="/upload">Upload A Gif!</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/signin"> Sign In To Upload!</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
