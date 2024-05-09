import React, { FC } from 'react'
import { IPost } from '../../data/intefaces/IPost'

import styles from './styles.module.css'

interface SliderItemProps {
  post: IPost
}

const SliderItem: FC<SliderItemProps> = ({ post }) => {

  const { anime, image, link_href, link_text, text, title } = post

  return (
    <div className={styles.sliderItem}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <h1 className={styles.postTitle}>
          {anime ? anime.englishTitle : title}
        </h1>
        <p className={styles.description}>
          {anime ? anime.description : text}
        </p>
        <div className={styles.buttonsContainer}>
          <a href={link_href} className={styles.buttonHref}>
            {anime ? `anime/${anime.anime_id}` : link_text}
          </a>
          {anime && <button className={styles.addToList}>Add to List</button>}
        </div>
      </div>
    </div>
  )
}

export default SliderItem