import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './style.module.css'

import firstcollage from "./../../img/forcollage/firs_picture_collage.png";
import secondcollage from "./../../img/forcollage/second_for_collage.jpg";
import thirdcollage from "./../../img/forcollage/third_for_collage.jpg";

import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

 const MainPage = () => {
  let sliderRef = useRef<Slider | null>(null);

  const next = () => {
    
      sliderRef?.current?.slickNext();
      console.log('click')
    
  };

  const previous = () => {
    
      sliderRef?.current?.slickPrev();
      console.log('click')
    
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:6000,
    arrows:false,
    
    
  };

  return (
    
    <div className={styles.slider_container}>
      <Slider
        ref={slider => {
          if (slider) {
            sliderRef.current = slider;
          }
        }}
        {...settings}
      >
        <div key={1}>
          <img src={firstcollage} alt="" />
        </div>
        <div key={2}>
          <img src={secondcollage} alt="" />
        </div>
        <div key={3}>
          <img src={thirdcollage} alt="" />
        </div>
      </Slider>
      <div className={styles.button_collaider}>
        <button  className={styles.previous_button} onClick={previous}>
        <MdNavigateBefore className={styles.img_collaider}/>
        </button>
        <button className={styles.next_button} onClick={next}>
        <MdNavigateNext className={styles.img_collaider} />
        </button>
      </div>
    </div>
  );
};
export default MainPage;