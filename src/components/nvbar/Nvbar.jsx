import React from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import TabLogin from '../tabLogin/TabLogin';

import './nvbar.css';

const Nvbar = (props) => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Girls</Nav.Link>
                    <Nav.Link href="#pricing">Terms</Nav.Link>
                    </Nav>
                    <Nav>
                    <Form >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login"><img className="img-width"  alt="login" src="https://img.icons8.com/color/48/000000/login-as-user.png"/></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#cart"><img className="img-width" alt="cart" src="https://img.icons8.com/plasticine/100/000000/shopping-cart.png" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
            {props.children}
        </>
    );
}


export default Nvbar;