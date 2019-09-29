import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './set.css';

const Set = (props) =>{
    return(
        <Card className="column">
            <h4>{props.girlName}</h4>
            <Link>
                <Card.Img variant="top" src={props.img} />
            </Link>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <p>{`$ ${props.price} MXN`}</p>
                <Link to={`/set/${props.setNo}`}>
                    <Button variant="primary">Buy</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}


export default Set;