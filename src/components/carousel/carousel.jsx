import { useState } from "react";

function Carousel(params) {
    const imgarray = [
        'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
        'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/tree_4.png',
        'http://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png',
        'http://commondatastorage.googleapis.com/codeskulptor-assets/gutenberg.jpg',
        'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg'
    ]
    const [carouselIndex, setCarouselIndex] = useState(0);


    const rightswipeHandler = () => {
        setCarouselIndex((prevIndex) => prevIndex + 1);
    }

    const leftswipeHandler = () => {
        setCarouselIndex((prevIndex) => prevIndex - 1);
    }

   return(
    <div style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
        <h1>Carousel</h1>
        <div style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
            <img style={{width:'300px', height:'300px'}} src={imgarray[carouselIndex]} alt="img" />
            <div style={{display:"flex",flexDirection:"row",alignItems:'center'}}>
                <button onClick={leftswipeHandler} disabled={carouselIndex === 0}>leftSwipe</button>
                <button onClick={rightswipeHandler} disabled={carouselIndex === (imgarray.length -1) }>rightSwipe</button>
            </div>
        </div>
    </div>
   ) 
}
export default Carousel;