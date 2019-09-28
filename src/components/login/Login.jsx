import React from 'react';
import {Form, Button, Row, Col, Image} from 'react-bootstrap';
import './login.css'

class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            login: {
                username: '',
                password: ''
            }
        }
    }
    onSubmit(event, form){
        event.preventDefault();
    }
    onChangeUsername = (event) =>{
        this.setState({login: {...this.state.login, username: event.target.value}})
    }
    onChangePassword = (event) =>{
        this.setState({login: {...this.state.login, password: event.target.value}})
    }

    render(){
        return(
            <Row className="padding">
                <Col>
                    <Form  onSubmit={(e) => this.onSubmit(e, this.state.login)}>
                        <h3>Registered Users</h3>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email"  onChange={this.onChangeUsername} required/>
                            <Form.Text className="text-muted">
                                We'll never share your personal info with anyone else.
                            </Form.Text>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password"  onChange={this.onChangePassword} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <p>By clicking Sign In, you agree to our Terms of Use and our Privacy Policy.</p>
                        </Form.Group>
                        <Button className="button" type="submit">
                            SIGN IN
                        </Button>
                        <Form.Group controlId="formBasicLink" className="padding-top">
                            <a href="#" className="link">Forgot your password?</a>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Login;
