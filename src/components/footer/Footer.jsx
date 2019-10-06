import React from 'react';
import {Container} from 'react-bootstrap';
import amex from '../../assets/icons/amex.png'
import master from '../../assets/icons/master.png'
import paypal from '../../assets/icons/paypal.png'
import visa from '../../assets/icons/visa.png'
import oxxo from '../../assets/icons/oxxo.png'
import './footer.css';

const Footer = () =>{
        return(
            <div className="footer">
                <Container>
                    <div className="footer-content">
                        <a href="/terms&cond">Terms and Conditons</a> /
                        <a>Model information</a>
                    </div>
                    <>
                        <img src={master} alt="Mastercard"/>
                        <img src={visa} alt="Visa"/>
                        <img src={paypal} alt="PayPal"/>
                        <img src={amex} alt="Amex"/>
                        <img src={oxxo} alt="Oxxo"/>
                    </>
                    <>
                        <p>Some of the available sets may contain explicit nudity. The site use is exclusively for people with at least 18 years old (check the terms and conditions for more info). All the models are 18 years old or older</p>
                    </>
                </Container>
            </div>
        );
}


export default Footer;