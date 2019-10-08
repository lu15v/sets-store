import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/actions/cart';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './set.css';

class Set extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const {girlName, img, title, desc, price, id: setNo} = this.props.set;
        return(
            <Card className="column">
                <h4>{girlName}</h4>
                <Link to={`/set/${setNo}`}>
                    <Card.Img variant="top" src={img} />
                </Link>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <p>{`$ ${price} MXN`}</p>
                    <Button className="button-set" onClick={() => this.props.addItem(this.props.set)}>Buy</Button>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state =>{
    return{
        cartList: state.cartItems
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        addItem: payload => dispatch(addItem(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Set);