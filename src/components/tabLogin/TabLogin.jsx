import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Login from '../login/Login';
import './tabLogin.css';

const TabLogin = () => {
    return (
        <div className="tab-container">
            <Tabs defaultActiveKey="signIn" id="LogRegTab">
                <Tab eventKey="signUp" title="SIGN UP">
    
                </Tab>
                <Tab eventKey="signIn" title="SIGN IN">
                    <Login/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default TabLogin;
