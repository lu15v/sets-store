import React from 'react';
import Set from '../set/Set';
import './gallery.css';

const sets = [
    {
        id: 1,
        girlName: 'Susan',
        img: "https://picsum.photos/id/1/5616/3744",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 2,
        girlName: 'Susan',
        img: "https://picsum.photos/id/2/5616/3744",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 3,
        girlName: 'Susan',
        img: "https://picsum.photos/id/3/5616/3744",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 4,
        girlName: 'Susan',
        img: "https://picsum.photos/id/4/5616/3744",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 5,
        girlName: 'Susan',
        img: "https://picsum.photos/id/1011/5472/3648",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 6,
        girlName: 'Susan',
        img: "https://picsum.photos/id/6/5616/3744",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 7,
        girlName: 'Susan',
        img: "https://picsum.photos/id/1008/5616/3744",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 8,
        girlName: 'Susan',
        img: "https://picsum.photos/id/8/5616/3744",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 9,
        girlName: 'Susan',
        img: "https://picsum.photos/id/9/5616/3744",
        title: "pack",
        desc: "something",
        price: 10
    },
    {
        id: 10,
        girlName: 'Susan',
        img: "https://picsum.photos/id/1004/5616/3744",
        title: "pack",
        desc: "something",
        price: 10
    }
]

const Gallery = () => (
  <div className="cities-grid row">
    {sets.map((set) =>
      <Set key={set.id} img={set.img} setNo={set.id} title={set.title} girlName={set.girlName} desc={set.desc} price={set.price}/>
    )}
  </div>
);


export default Gallery;