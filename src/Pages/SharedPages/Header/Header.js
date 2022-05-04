import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/icon/icon.png'
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
      signOut(auth);
  }

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark mb-2" className='menubar'>
  <Container>
  <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /><span className='first-title'>MOTOR</span> <span className='second-title'>MANIA</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  as={Link} to="/">Home</Nav.Link>
      <Nav.Link  as={Link} to="manageinventory">Manage Inventory</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link  as={Link} to="/blog">Blogs</Nav.Link>
      {
        user ?

          <Nav>
            <Nav.Link  as={Link} to="/manageitem">ManageItem</Nav.Link>
            <Nav.Link  as={Link} to="/myitem">MyItem</Nav.Link>
            <Nav.Link  as={Link} to="/additem">AddItem</Nav.Link>
            <Nav.Link  onClick={handleSignOut}>Log Out</Nav.Link>
          </Nav>
        :

        <Nav.Link  as={Link} to="/login">
        Login 
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;