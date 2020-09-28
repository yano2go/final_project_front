import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
export default function NavBar() {
     return (
       
          <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="blue">
  <Navbar.Brand href="/">Learning in Gifs</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/cooking">Cooking</Nav.Link>
      <Nav.Link href="/diy">DIY</Nav.Link>
      <Nav.Link href="/artsandcrafts">Arts and Crafts</Nav.Link>
      <Nav.Link href="/programming">Programming</Nav.Link>
      <Nav.Link href="/random">Random</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="/upload">Upload A Gif!</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          </div>
         
     )
}

