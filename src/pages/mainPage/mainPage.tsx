import React from 'react'
import PostSlider from '../../components/slider/PostSlider'

const MainPage = () => {
  return (
    <main>
      <PostSlider />

    </main>
  )
}

export default MainPage

// import React, { useRef } from "react";
// import Slider, { Settings } from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from './style.module.css'
// import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
// // import AnimeItem from "./AnimeItem";

// interface Slide {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   buttonText: string;
// }

// interface MainPageProps {
//   slides: Slide[];
//   settings: Settings;
// }

// const MainPage: React.FC<MainPageProps> = ({ slides, settings }) => {
//   const sliderRef = useRef<Slider>(null);

//   const next = () => {
//     sliderRef.current?.slickNext();
//     console.log('click')
//   };

//   const previous = () => {
//     sliderRef.current?.slickPrev();
//     console.log('click')
//   };

//   return (
//     <div className={styles.slider_container}>
//       <Slider ref={sliderRef} {...settings}>
//         {slides.map((slide) => (
//           <div key={slide.id}>
//             <div className={styles.slideContainer}>
//               <img src={slide.image} alt="" />
//               <div className={styles.description_slider_container}>
//                 <h1 className={styles.name_anime_slider}>{slide.title}</h1>
//                 <p className={styles.description_anime_slider}>{slide.description}</p>
//                 <button className={styles.button_watch_slider}>{slide.buttonText}</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       <div className={styles.button_collaider}>
//         <button className={styles.previous_button} onClick={previous}>
//           <MdNavigateBefore className={styles.img_collaider}/>
//         </button>
//         <button className={styles.next_button} onClick={next}>
//           <MdNavigateNext className={styles.img_collaider} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MainPage;
