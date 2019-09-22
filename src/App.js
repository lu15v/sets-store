import React,{Suspense, lazy} from 'react';
import './App.css';
import Nvbar from './components/nvbar/Nvbar';
const Gallery = lazy(() => import('./components/gallery/Gallery'));

function App() {
  return (
    <div className="App">
          <Nvbar/>
          <Suspense fallback={<div>Loading...</div>}>
           <Gallery/>
          </Suspense>
    </div>
  );
}

export default App;
