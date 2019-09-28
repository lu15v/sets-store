import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            formValues:{
                userName: '',
                email: '',
                password: '',
                confirmPass: ''
            }
        }
    }

    handleSubmit(event, param){
        event.preventDefault();
        console.log(param);
    }

    handleChangeUserName = (event) => {
        this.setState({formValues: {...this.state.formValues, userName: event.target.value}})
        console.log(event.target.value);
    }
    handleChangeEmail = (event) => {
        this.setState({formValues: {...this.state.formValues, email: event.target.value}})
        console.log(event.target.value);
    }
    handleChangePassword = (event) => {
        this.setState({formValues: {...this.state.formValues, password: event.target.value}})
        console.log(event.target.value);
    }
    handleChangeConfirmPassword = (event) => {
        this.setState({formValues: {...this.state.formValues, confirmPass: event.target.value}})
        console.log(event.target.value);
    }

    render(){
        return(
            <Row className="padding">
                <Col>
                    <Form onSubmit={(e) => this.handleSubmit(e, this.state.formValues)}>
                        <h3>Create your account</h3>
                        <p>Join to the **** family</p>
                        <Row>
                            <Col>
                                <Form.Group controlId="userName">
                                    <Form.Control type="userName" placeholder="Enter username"  value={this.state.formValues.userName} onChange={this.handleChangeUserName} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="Email">
                                    <Form.Control type="email" placeholder="Enter email" value={this.state.formValues.email} onChange={this.handleChangeEmail} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="Password">
                                    <Form.Control type="password" placeholder="Password" value={this.state.formValues.password} onChange={this.handleChangePassword} required/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="PasswordConfirm">
                                    <Form.Control type="passwordConfirm" placeholder="Confirm password" value={this.state.formValues.confirmPass} onChange={this.handleChangeConfirmPassword} required />
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
}

export default Register;
