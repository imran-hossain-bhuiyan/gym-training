import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';



const Header = () => {
    const [user] = useAuthState(auth);
    // const navStyle = ({ isActive }) => {
    //     return {
    //         color: isActive ? 'blue' : "black",
    //     }
    // }

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <>
            <Navbar className='nav-bar' sticky='top' collapseOnSelect expand="lg"  >
                <Container>
                    <Navbar.Brand style={{ fontSize: '30px', fontWeight: '600', fontFamily: "'Square Peg', cursive", color: 'blue' }} as={Link} to="/">GYM FREAK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-primary' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-primary' as={Link} to="home#services">Services</Nav.Link>
                            <Nav.Link className='text-primary' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='text-primary' as={Link} to="/about">About Me</Nav.Link>
                            {
                                user
                                    ?
                                    <Nav.Link onClick={handleSignOut} className='text-primary' as={Link} to="/signout">SignOut</Nav.Link>
                                    :
                                    <Nav.Link className='text-primary' as={Link} to="/login">Log In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;