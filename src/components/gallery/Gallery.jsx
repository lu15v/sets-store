import React from 'react';
import Set from '../set/Set';
import {Col} from 'react-bootstrap';
import './gallery.css';

const sets = [
    {
        id: 1,
        girlName: 'Susan',
        img: "https://picsum.photos/id/1/212/375",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 2,
        girlName: 'Susan',
        img: "https://picsum.photos/id/2/212/375",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 3,
        girlName: 'Susan',
        img: "https://picsum.photos/id/3/212/375",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 4,
        girlName: 'Susan',
        img: "https://picsum.photos/id/4/212/375",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 5,
        girlName: 'Susan',
        img: "https://picsum.photos/id/1011/212/375",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 6,
        girlName: 'Susan',
        img: "https://picsum.photos/id/6/212/375",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 7,
        girlName: 'Susan',
        img: "https://picsum.photos/id/1008/212/375",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 8,
        girlName: 'Susan',
        img: "https://picsum.photos/id/8/212/375",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 9,
        girlName: 'Susan',
        img: "https://picsum.photos/id/9/212/375",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 10,
        girlName: 'Susan',
        img: "https://picsum.photos/id/1004/212/375",
        title: "pack",
        desc: "something",
        price: 10
    }
]

const Gallery = () => {
  return(
        <div className="cities-grid row">
        {sets.map((set) =>
        <Col key={set.id} xs={12} sm={6} md={6} lg={3} xl={3}>
            <Set key={set.id} img={set.img} setNo={set.id} title={set.title} girlName={set.girlName} desc={set.desc} price={set.price}/>
        </Col>
        )}
    </div>
  );
}


export default Gallery;