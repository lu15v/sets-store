import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './set.css';

const Set = (props) =>{
    return(
            <Card className="column">
                <h4>{props.girlName}</h4>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                    <p>{`$ ${props.price} MXN`}</p>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
            </Card>
    )
}


export default Set;