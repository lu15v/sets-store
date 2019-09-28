import React from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import './nvbar.css';

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
                <Nav>
                    <Nav.Link href="#login"><img className="img-width"  src="https://img.icons8.com/color/48/000000/login-as-user.png"/></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#cart"><img className="img-width" src="https://img.icons8.com/plasticine/100/000000/shopping-cart.png" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Nvbar;