import React,{Suspense, lazy} from 'react';
import {Container} from 'react-bootstrap';  
import './App.css';
import Nvbar from './components/nvbar/Nvbar';
import ImageSlider from './components/imageSlider/ImageSlider';
const Gallery = lazy(() => import('./components/gallery/Gallery'));


function App() {
  return (
    <Container>
          <Nvbar/>
          <ImageSlider/>
          <Suspense fallback={<div>Loading...</div>}>
           <Gallery/>
          </Suspense>
    </Container>
  );
}

export default App;
