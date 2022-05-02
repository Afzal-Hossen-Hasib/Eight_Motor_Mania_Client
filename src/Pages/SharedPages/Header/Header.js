import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark mb-2">
  <Container>
  <Navbar.Brand as={Link} to="/"><img src= {logo} width='250px' alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  as={Link} to="/">Home</Nav.Link>
      <Nav.Link  href="#pricing">Manage Inventory</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link  as={Link} to="/blog">Blogs</Nav.Link>
      <Nav.Link  as={Link} to="/login">
        Login 
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;