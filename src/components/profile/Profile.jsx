import React,{Suspense, lazy} from 'react';
import {Image, Alert} from 'react-bootstrap';
import './profile.css';
const Gallery = lazy(() => import('../gallery/Gallery'));


const Profile = (props) =>{
    return(
        <div className="container">
            <div className="img-holder">
                <Image src="https://eligeeducar.cl/wp-content/uploads/2018/01/vangogh.jpg" fluid />
                <div className="text-img">
                    <h3>Susan</h3>
                    Susan is bla bla bla bla bla bla bla
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Gallery/>
            </Suspense> 
        </div>
    );
}


export default Profile;
