import React from 'react';
import Nvbar from '../../components/nvbar/Nvbar';
import {ListGroup, Row, Col, Button} from 'react-bootstrap';
import CartItem from './CartItem';
import './cart.css';
import {deleteItem} from '../../redux/actions/cart';
import DisplayMessage from '../../components/utilities/DisplayMessage';
import {connect} from 'react-redux';

class Cart extends React.Component{

    total = () => {
        if(this.props.cartList.size > 0 )
            return [...this.props.cartList.values()].reduce(function(acc, item) {return acc + item.price;},0)
        return 0;
    }
    

    render(){
        return(
            <>
            <Nvbar/>
            {this.props.cartList.size > 0 ? 
                <Row className="cart-content">
                    <Col className="cart-list">
                        <ListGroup variant="flush">
                                {[...this.props.cartList.values()].map((item, idx) =>
                                    <CartItem key={idx} set={item} delFunc={this.props.deleteItem} />
                                )}
                            </ListGroup> 
                        </Col>
                        <Col className="col-buy-section">
                            <div className="buy-container">
                                <Row>
                                    <Col xs={6} sm={6} md={6}><h4 className="subtotal">{`Subtotal (items ${this.props.cartList.size}):`} </h4></Col>
                                    <Col xs={6} sm={6} md={6}><h4 className="price">{`$ ${this.total()}`}</h4></Col>
                                </Row>
                                <Row className="cart-button-container">
                                    <Col><Button className="button-checkout">Checkout</Button></Col>
                                </Row>
                            </div>
                        </Col>
                </Row>
            : <DisplayMessage header={"Empty Cart"} message={"Start looking at our sets, we are sure you're gonna love them!"}/>}
            </>
        );
    }
}

const mapStateToProps = state =>{
    return{
        cartList: state.cartItems
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        deleteItem: id => dispatch(deleteItem(id))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Cart);