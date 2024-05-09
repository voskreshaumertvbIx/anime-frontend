import Slider, { Settings } from "react-slick";

import styles from './styles.module.css'

import { posts } from '../../data/posts.json'
import SliderItem from "../sliderItem/SliderItem";
import { IPost } from "../../data/intefaces/IPost";

const PostSlider = () => {
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        className={styles.dotsContainer}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={styles.sliderDot}
      >
        {i + 1}
      </div>
    )
  };

  return (
    <section className={styles.sliderContainer}>
      <Slider {...sliderSettings}>
        {posts.map((post) => <SliderItem key={post.post_id} post={post as IPost} />)}
      </Slider>
    </section>
  )
}

export default PostSlider