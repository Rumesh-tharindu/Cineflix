import Image from 'next/image';
import Slider from 'react-slick';
import Slider1 from '../public/slider-images/banner-1.jpg';
import Slider2 from '../public/slider-images/banner-2.jpg';
import Slider3 from '../public/slider-images/banner-3.jpg';
import Slider4 from '../public/slider-images/banner-4.jpg';
import Slider5 from '../public/slider-images/banner-5.jpg';

import Link from 'next/link'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const HeroSlider = () =>{
    return (
        <div className="heroslider">
            <div className="container">
            <div>
      <Slider {...settings}>
      <div className='heroslider-image'>
        {/* <Link href='/pricing'> */}
        <Image
                        
                        src={Slider3}
                        alt="Picture of the author"
                       />
                        <div className="heroslider-content">
                           <div className="heroslider-content__title">
                                 <h1>Gajaman</h1>
                           </div>
                           <div className="heroslider-content__desc">
                             <p>It is a long established fact that a reader will be distracted by the readable content of a 
                              page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                              normal distribution of letters, as opposed to using 'Content here, content here', making it look 
                              like readable English.</p> 
                           </div>
                           <div className="heroslider-actions">
                            <Link href="" className="heroslider-action">
                              <span className='heroslider-action__playbtn'>
                                <FontAwesomeIcon
                                icon = {faPlay}
                                style={{ color: "#1e1e1e" }}
                                />
                              </span>
                              <span className='heroslider-action__playtitle'>Watch Trailer</span>
                            </Link>
                           </div>
                       </div>
        {/* </Link> */}
    
          </div>
          <div className='heroslider-image'>
          <Image
                        
            src={Slider1}
            alt="Picture of the author"
           />
           <div className="heroslider-content">
               <div className="heroslider-content__title">
                     <h1>Film Title</h1>
               </div>
               <div className="heroslider-content__desc">
                 <p>It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                  normal distribution of letters, as opposed to using 'Content here, content here', making it look 
                  like readable English.</p> 
               </div>
               <div className="heroslider-actions">
                <a href="" className="heroslider-action">
                  <span className='heroslider-action__playbtn'>
                    <FontAwesomeIcon
                    icon = {faPlay}
                    style={{color: "#1e1e1e"}}
                    />
                  </span>
                  <span className='heroslider-action__playtitle'>Watch Trailer</span>
                </a>
               </div>
           </div>
          </div>
          <div className='heroslider-image'>
          <Image
                        
            src={Slider2}
            alt="Picture of the author"
           />
            <div className="heroslider-content">
               <div className="heroslider-content__title">
                     <h1>Film Title</h1>
               </div>
               <div className="heroslider-content__desc">
                 <p>It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                  normal distribution of letters, as opposed to using 'Content here, content here', making it look 
                  like readable English.</p> 
               </div>
               <div className="heroslider-actions">
                <a href="" className="heroslider-action">
                  <span className='heroslider-action__playbtn'>
                    <FontAwesomeIcon
                    icon = {faPlay}
                    style={{ color: "#1e1e1e" }}
                    />
                  </span>
                  <span className='heroslider-action__playtitle'>Watch Trailer</span>
                </a>
               </div>
           </div>
          </div>
  
          <div className='heroslider-image'>
          <Image
                        
            src={Slider4}
            alt="Picture of the author"
           />
            <div className="heroslider-content">
               <div className="heroslider-content__title">
                     <h1>Film Title</h1>
               </div>
               <div className="heroslider-content__desc">
                 <p>It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                  normal distribution of letters, as opposed to using 'Content here, content here', making it look 
                  like readable English.</p> 
               </div>
               <div className="heroslider-actions">
                <a href="" className="heroslider-action">
                  <span className='heroslider-action__playbtn'>
                    <FontAwesomeIcon
                    icon = {faPlay}
                    style={{ color: "#1e1e1e" }}
                    />
                  </span>
                  <span className='heroslider-action__playtitle'>Watch Trailer</span>
                </a>
               </div>
           </div>
          </div>
          <div className='heroslider-image'>
          <Image
                        
            src={Slider5}
            alt="Picture of the author"
           />
            <div className="heroslider-content">
               <div className="heroslider-content__title">
                     <h1>Film Title</h1>
               </div>
               <div className="heroslider-content__desc">
                 <p>It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                  normal distribution of letters, as opposed to using 'Content here, content here', making it look 
                  like readable English.</p> 
               </div>
               <div className="heroslider-actions">
                <a href="" className="heroslider-action">
                  <span className='heroslider-action__playbtn'>
                    <FontAwesomeIcon
                    icon = {faPlay}
                    style={{ color: "#1e1e1e" }}
                    />
                  </span>
                  <span className='heroslider-action__playtitle'>Watch Trailer</span>
                </a>
               </div>
           </div>
          </div>

      </Slider>
    </div>
            </div>
        </div>
    )
}

export default HeroSlider;