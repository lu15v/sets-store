import React from 'react';
import {Alert} from 'react-bootstrap';
const CustomAlert = (props) =>{
    const {visible, variant} = props;
    return visible ? <Alert variant={variant}>{props.children}</Alert> : null;
}

export default CustomAlert;