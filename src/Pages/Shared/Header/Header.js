import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <>
        <Navbar className='nav-bar' sticky='top' collapseOnSelect expand="lg"  >
  <Container>
  <Navbar.Brand style={{fontSize: '30px', fontWeight: '600', fontFamily: "'Square Peg', cursive", color: 'blue'}} as={Link} to="/">GYM FREAK</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="home#pricing">Pricing</Nav.Link>
    
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/about">About Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;