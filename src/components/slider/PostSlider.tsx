import Slider, { Settings } from "react-slick";

import styles from './styles.module.css'

import posts from '../../data/posts.json'
import SliderItem from "../sliderItem/SliderItem";
import { IPost } from "../../data/intefaces/IPost";

const PostSlider = () => {
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: i => (
      <div
        className={styles.sliderDot}
      >
      </div>
    ),
    dotsClass: "dotsContainer"
  };

  return (
    <section className={styles.sliderContainer}>
      <div className={styles.shadow}></div>
      <Slider {...sliderSettings}>
        {posts.posts.map((post) =>
          <SliderItem key={post.post_id} post={post as IPost} />)}
      </Slider>
    </section>
  )
}

export default PostSlider