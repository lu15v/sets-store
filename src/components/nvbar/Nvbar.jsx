import React from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';

const Nvbar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                <Form >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Nvbar;