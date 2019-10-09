import React from 'react';
import {ListGroup, Image, Row, Col} from 'react-bootstrap';
import close from '../../assets/icons/delete.png'
import './cartItem.css';

const CartItem = (props) =>{
    const {delFunc, set } = props;
    return(
        <ListGroup.Item>
            <Row>
                <Col xs={1} sm={2} md={2} lg={2} xl={2}>
                    <div className="image-cart-style">
                        <Image className="image-set-preview" src="https://picsum.photos/id/237/212/375"/>
                    </div>
                </Col>
                <Col xs={6} sm={8} md={8} lg={8} xl={8}>
                    <div className="set-desc">
                        {set.title} 
                    </div>
                </Col>
                <Col xs={1} sm={2} md={2} lg={2} xl={2}  className="close-cart-style">
                    <a onClick={() => delFunc(set)}>
                        <Image src={close}/> 
                    </a>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default CartItem;
