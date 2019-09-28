import React,{Suspense, lazy} from 'react';
import Nvbar from '../../components/nvbar/Nvbar';
import ImageSlider from '../../components/imageSlider/ImageSlider';
const Gallery = lazy(() => import('../../components/gallery/Gallery'));

class Menu extends React.Component{
    render(){
        return(
            <div>
                <Nvbar/>
                <ImageSlider/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Gallery/>
                </Suspense>
            </div>
        );
    }
}

export default Menu;

