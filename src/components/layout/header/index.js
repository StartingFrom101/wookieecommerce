import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from "react";
import { Link}
    from 'react-router-dom';


import './header.css'
import Search from '../search/search';

function Header() {
    return ( 
        <header className=''> 
            <Navbar bg="light" expand="lg">
            <Container> 
                <Navbar.Brand><img src='logo.png' height="30" className="d-inline-block align-top" alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item className='p-3'><Link to='/'>Home</Link></Nav.Item>
                    <Nav.Item className='p-3'><Link to='products/1'>Products</Link></Nav.Item>
                </Nav>
                <Nav>
                    <Search/>
                </Nav>
                <Nav className='p-2'>
                    <Nav.Item href="#cart" className='p-3'><Link to={'/cart'}><FontAwesomeIcon icon={faShoppingCart}/> Cart</Link></Nav.Item>
                    <Nav.Item href="#signin" className='p-3'><Link to={'/login'}><FontAwesomeIcon icon={faUser}/> Login</Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
     );
}

export default Header;