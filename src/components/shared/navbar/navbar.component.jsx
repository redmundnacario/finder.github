import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

// import "./navbar.styles.scss";

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <div className = "container">
                <Navbar.Brand as={Link} to="/">
                    <h3><i className="fab fa-github"/> Github Finder</h3>    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarComponent