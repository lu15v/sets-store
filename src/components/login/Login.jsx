import React from 'react';
import {Form, Button, Row, Col, Image} from 'react-bootstrap';
import './login.css';

const Login = () =>{
    return(
        <div>
            <Row>
                <Image className="logo-align" src="https://www.garekthomann.com/wp-content/uploads/2017/05/Design1-1-171x180.png" rounded />
            </Row>
            <Row className="form-login">
                <Col>
                    <Form>
                        <h3>Registered Users</h3>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your personal info with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <a href="#">Forgot your password?</a>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <div>
                        <h3>Do you want to be part of ****</h3>
                        <p></p>
                    </div>
                    <Button variant="dark" type="submit">
                        Sign Up
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
