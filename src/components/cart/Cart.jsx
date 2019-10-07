import React from 'react';
import Nvbar from '../nvbar/Nvbar';
import {ListGroup, Row, Col, Button} from 'react-bootstrap';
import CartItem from './CartItem';
import './cart.css';

class Cart extends React.Component{
    render(){
        return(
            <>
            <Nvbar/>
            <Row className="cart-content">
                <Col>
                    <ListGroup variant="flush">
                        <CartItem message="Cras justo odio"/>
                        <CartItem message="Dapibus ac facilisis in"/>
                        <CartItem message="Morbi leo risus"/>
                        <CartItem message="Porta ac consectetur ac"/>
                    </ListGroup>
                </Col>
                <Col className="col-buy-section">
                    <div className="buy-container">
                        <Row>
                            <Col xs={6} sm={6} md={6}><h4 className="subtotal">Subtotal (items 4): </h4></Col>
                            <Col xs={6} sm={6} md={6}><h4 className="price">$100</h4></Col>
                        </Row>
                        <Row className="cart-button-container">
                            <Col><Button className="button-checkout">Checkout</Button></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            </>
        );
    }
}


export default Cart;