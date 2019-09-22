import React from 'react';
import {Carousel} from 'react-bootstrap';
import './imageSlider.css';

const ImageSlider = () =>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 img-sizing"
                src="https://picsum.photos/id/1022/6000/3376"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-sizing"
                src="https://picsum.photos/id/1019/5472/3648"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-sizing"
                src="https://picsum.photos/id/1021/2048/1206"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


export default ImageSlider;