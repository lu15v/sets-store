import React from 'react';
import './displayMessage.css';

const DisplayMessage = (props) =>{
    const {header, body} = props
    return(
        <div className="separation">
            <div className="message">
                <h4 className="main-message">{header}</h4>
                <p className="secondary-message">{body}</p>
            </div>
        </div>
    )
}


export default DisplayMessage;