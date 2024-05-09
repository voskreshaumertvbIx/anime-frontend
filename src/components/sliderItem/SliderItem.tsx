import React, { FC } from 'react'
import { IPost } from '../../data/intefaces/IPost'

import { CiPlay1, CiCirclePlus } from "react-icons/ci";
import styles from './styles.module.css'

interface SliderItemProps {
  post: IPost
}

const SliderItem: FC<SliderItemProps> = ({ post }) => {

  const { anime, image, link_href, link_text, text, title } = post

  return (
    <article className={styles.sliderItem}>
      <header className={styles.imageContainer}>
        <img className={styles.image} src={`images/${image}`} alt={title} />
      </header>
      <section className={styles.flexEnd}>
        <div className={styles.content}>
          <h1 className={styles.postTitle}>
            {anime ? anime.englishTitle : title}
          </h1>
          {anime &&
            <div className={styles.tagsContainer}>
              {anime.tags?.map(tag =>
                <div key={tag.tag_id} className={styles.tag}>{tag.name}</div>
              )}
              <p>Ep: {anime.episodesTotal === anime.episodesCurrent
                ? anime.episodesCurrent
                : `${anime.episodesCurrent}/${anime.episodesTotal}`
              } </p>
            </div>
          }
          <p className={styles.description}>
            {anime ? anime.description : text}
          </p>
          <div className={styles.buttonsContainer}>
            {anime
              ?
              <a className={styles.buttonHref} href={`anime/${anime.anime_id}`}>
                <CiPlay1 className={styles.hrefIcon} />
                Watch now
              </a>
              :
              <a className={styles.buttonHref} href={link_href}>
                {link_text}
              </a>
            }
            {anime &&
              <button className={styles.addToList}>
                <CiCirclePlus className={styles.hrefIcon} />
                Add to List
              </button>}
            {/* TODO "Add to List" */}
          </div>
        </div>
      </section>
    </article >
  )
}

export default SliderItem