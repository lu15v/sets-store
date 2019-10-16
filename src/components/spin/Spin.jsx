import React from 'react';
import {Spinner} from 'react-bootstrap';
import './spin.css';

const Spin = (props) =>{
    const {active} = props;
    return(
        active ? 
            <div className="spin-container">
                <Spinner className="spin-elements" animation="grow" />
            </div>: null
    );
}


export default Spin;
