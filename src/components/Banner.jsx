import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/banner.css'

import Banner1 from '../assets/banner1.png'
import Banner2 from '../assets/banner2.png'
import Banner3 from '../assets/banner3.png'

export const Banner = () =>{
   return (
    <>
      <hr className="linha"></hr>
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false}>
        <div className='carrossel'>
          <img src={Banner1}  alt="Image 1" />
        </div>
        <div className='carrossel'>
          <img src={Banner2} alt="Image 2" />
        </div>
        <div className='carrossel'>
          <img src={Banner3} alt="Image 3" />
        </div>
      </Carousel>
    </>
    
  );
}