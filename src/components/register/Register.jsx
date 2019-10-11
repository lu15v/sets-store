import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {register} from '../../api/user';
import CustomAlert from '../utilities/CustomAlert';
import InformativeModal from '../utilities/InformativeModal';

import './register.css';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userError: '',
            emailError: '',
            formValues:{
                username: '',
                email: '',
                password: '',
                confirmPass: ''
            }
        }
    }
    
    handleSubmit = (event, param) =>{
        event.preventDefault();
        if(this.state.formValues.password === this.state.formValues.confirmPass)
            register(param).then(res => console.log(",,,,,, ", res))
                        .catch(err => 
                               { if(err.response.data.message.length > 1){
                                    this.setState({userError: err.response.data.message[0].properties.message,
                                               emailError: err.response.data.message[1].properties.message})
                                }else if(err.response.data.message[0].properties.path === "username"){
                                    this.setState({userError: err.response.data.message[0].properties.message, emailError: ''})
                                }else if(err.response.data.message[0].properties.path === "email"){
                                    this.setState({userError: '', emailError: err.response.data.message[0].properties.message})
                                }
                                else{
                                    this.setState({userError: '',
                                        emailError: ''})
                                }
                            });
    }   

    handleChangeUserName = (event) => {
        this.setState({formValues: {...this.state.formValues, username: event.target.value}});
    }
    handleChangeEmail = (event) => {
        this.setState({formValues: {...this.state.formValues, email: event.target.value}});
    }
    handleChangePassword = (event) => {
        this.setState({formValues: {...this.state.formValues, password: event.target.value}});
        
    }
    handleChangeConfirmPassword = (event) => {
        this.setState({formValues: {...this.state.formValues, confirmPass: event.target.value}});
    }

    render(){
        return(
            <Row className="padding">
                <InformativeModal title="title" body="body"/>
                <Col>
                    <Form onSubmit={(e) => this.handleSubmit(e, this.state.formValues)}>
                        <h3>Create your account</h3>
                        <p>Join to the **** family</p>
                        <Row>
                            <Col>
                                <Form.Group controlId="username">
                                    <Form.Control type="username" placeholder="Enter username"  value={this.state.formValues.username} onChange={this.handleChangeUserName} required/>
                                    <CustomAlert visible={this.state.userError != ''} variant="danger">{this.state.userError}</CustomAlert>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="Email">
                                    <Form.Control type="email" placeholder="Enter email" value={this.state.formValues.email} onChange={this.handleChangeEmail} required/>
                                    <CustomAlert visible={this.state.emailError != ''} variant="danger">{this.state.emailError}</CustomAlert>
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
                                    <Form.Control type="password" placeholder="Confirm password" value={this.state.formValues.confirmPass} onChange={this.handleChangeConfirmPassword} required />
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Form.Group controlId="formBasicCheckbox">
                            <CustomAlert visible={!(this.state.formValues.password === this.state.formValues.confirmPass)} variant="danger">Passwords must match</CustomAlert>
                            <p>By clicking Sign In, you agree to our Terms of Use and our Privacy Policy.</p>
                        </Form.Group>
                        <Button className="button-sign-up" type="submit" disabled={!(this.state.formValues.password === this.state.formValues.confirmPass)}>
                            SIGN UP
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Register;
