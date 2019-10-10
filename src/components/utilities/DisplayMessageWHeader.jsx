import React from 'react';
import DisplayMessage from './DisplayMessage';

import './displayMessageWHeader.css';

const DisplayMessageWHeader = (props) =>{
    const {header, body} = props
    return(
        <>
            <div className="header">
            </div>
            <DisplayMessage header={header} body={body}/>
        </>
    );
}


export default DisplayMessageWHeader;
