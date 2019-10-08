import React from 'react';
import Nvbar from '../../components/nvbar/Nvbar';
import {ListGroup, Row, Col, Button} from 'react-bootstrap';
import CartItem from './CartItem';
import './cart.css';

import {connect} from 'react-redux';

class Cart extends React.Component{

    total = () => {
        if(this.props.cartList.length > 0 )
            return Object.values(this.props.cartList).reduce(function(acc, item) {return acc + item.price;},0)
        return 0;
    }
    render(){
        return(
            <>
            <Nvbar/>
            <Row className="cart-content">
                <Col className="cart-list">
                    <ListGroup variant="flush">
                        {this.props.cartList.map((item, idx) =>
                            <CartItem key={idx} message={item.desc}/>
                        )}
                    </ListGroup>
                </Col>
                <Col className="col-buy-section">
                    <div className="buy-container">
                        <Row>
                            <Col xs={6} sm={6} md={6}><h4 className="subtotal">{`Subtotal (items ${this.props.cartList.length}):`} </h4></Col>
                            <Col xs={6} sm={6} md={6}><h4 className="price">{`$ ${this.total()}`}</h4></Col>
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

const mapStateToProps = state =>{
    return{
        cartList: state.cartItems
    };
}

export default  connect(mapStateToProps)(Cart);