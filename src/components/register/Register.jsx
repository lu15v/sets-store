import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

const Register = () =>{
    return(
        <Row>
            <Col>
                <Form>
                    <h3>Create your account</h3>
                    <p>Join to the **** family</p>
                    <Row>
                        <Col>
                            <Form.Group controlId="userName">
                                <Form.Control type="userName" placeholder="Enter username" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicPasswordConfirm">
                                <Form.Control type="passwordConfirm" placeholder="Confirm password" />
                            </Form.Group>
                        </Col>
                        
                    </Row>
                    <Form.Group controlId="formBasicCheckbox">
                        <p>By clicking Sign In, you agree to our Terms of Use and our Privacy Policy.</p>
                    </Form.Group>
                    <Button className="button" type="submit">
                        SIGN UP
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

export default Register;
