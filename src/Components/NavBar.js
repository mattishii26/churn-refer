import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';

const NavBar = () => {
    return (

        <Navbar bg="primary" variant="dark" sticky="top">
            <Navbar.Brand href="/">
                    Churnin' Points
            </Navbar.Brand>

            <Nav className="ml-auto">
                <Nav.Link href="#top">
                    Home
                </Nav.Link>
                <Nav.Link href="#about">
                    About
                </Nav.Link>
                <Nav.Link href="#contact">
                    Contact
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default NavBar;