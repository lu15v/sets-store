import React from 'react';
import Navbar from '../nvbar/Nvbar';
import {Image, Button} from 'react-bootstrap';
import './setPreview.css';

class SetPreview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="preview-container">
                <Navbar/>
                <Image className="img" src="https://picsum.photos/id/237/240/430"/>
                <h1>Susan</h1>
                <>
                    <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                </>
                <>
                    <p className="desc content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                </>
                <Button className="button">Buy</Button>
            </div>
        );
    }
}


export default SetPreview;