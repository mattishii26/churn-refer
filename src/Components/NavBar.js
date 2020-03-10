import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">PointsReferral</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default NavBar;