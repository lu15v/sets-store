import React from 'react';
import Set from '../set/Set';

const sets = [
    {
        id: 1,
        img: "https://picsum.photos/id/1/5616/3744",
        title: "pack",
        desc: "something"
    },
    {
        id: 2,
        img: "https://picsum.photos/id/2/5616/3744",
        title: "pack",
        desc: "something"
    },
    {
        id: 3,
        img: "https://picsum.photos/id/3/5616/3744",
        title: "pack",
        desc: "something"
    },
    {
        id: 4,
        img: "https://picsum.photos/id/4/5616/3744",
        title: "pack",
        desc: "something"
    },
    {
        id: 5,
        img: "https://picsum.photos/id/1011/5472/3648",
        title: "pack",
        desc: "something"
    },
    {
        id: 6,
        img: "https://picsum.photos/id/6/5616/3744",
        title: "pack",
        desc: "something"
    },
    {
        id: 7,
        img: "https://picsum.photos/id/1008/5616/3744",
        title: "pack",
        desc: "something"
    },
    {
        id: 8,
        img: "https://picsum.photos/id/8/5616/3744",
        title: "pack",
        desc: "something"
    },
    {
        id: 9,
        img: "https://picsum.photos/id/9/5616/3744",
        title: "pack",
        desc: "something"
    },
    {
        id: 10,
        img: "https://picsum.photos/id/1004/5616/3744",
        title: "pack",
        desc: "something"
    }
]

const Gallery = () => (
  <div className="cities-grid">
    {sets.map((set) =>
      <Set key={set.id} img={set.img} title={set.title} desc={set.desc} />
    )}
  </div>
);


export default Gallery;