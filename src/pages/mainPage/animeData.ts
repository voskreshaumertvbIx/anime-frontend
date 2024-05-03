import firstcollage from './../../img/forcollage/firs_picture_collage.png'
import secondcollage from './../../img/forcollage/second_for_collage.jpg'
import thirdcollage from './../../img/forcollage/third_for_collage.jpg'


export const slides = [
  { 
    id:1,
    image: firstcollage,
    title: "Darling in the Franxx",
    description: "In the distant future, humanity has been...",
    buttonText: "Watch Now"
  },
  { 
    id:2,
    image: secondcollage,
    title: "Date A Live",
    description: "Date A Live is a romantic comedy anime...",
    buttonText: "Watch Now"
  },
  {
    id:3,
    image: thirdcollage,
    title: "Sword Art Online",
    description: "Sword Art Online is an anime series based on the...",
    buttonText: "Watch Now"
  }
]
export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:false,
};