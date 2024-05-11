import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import dxd from "./../../img/dxd.jpg";
import styles from "./style.module.css";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { AnimeTitle } from "../../../generated";



interface AnimePreviewProps {
  animeData: AnimeTitle;
}

const AnimePreview: FC<AnimePreviewProps> = ({ animeData }) => {
  return (
    <main className="container">
      <article className={styles.anime_container}>
        <section className={styles.anime_logo}>
          <img src={`http://localhost:5000/${animeData.imagePath}`} alt="anime_logo" className={styles.img_size} />
        </section>
        <section className={styles.anime_details}>
          <header>
            <h1 className={styles.english_name}>{animeData.englishTitle}</h1>
            <h3 className={styles.original_name}>{animeData.originalTitle}</h3>
          </header>
          <footer>
            <ul className={styles.anime_data}>
              <li>
                <span className={styles.icon_calendar}>
                  <IoCalendar className={styles.anime_icon} />
                </span>

                {animeData.releaseYear}
              </li>
              <li>
                Episodes: {animeData.episodesCurrent}/{animeData.episodesTotal}
              </li>
              <li>
                <span className={styles.icon_star}>
                  <MdOutlineStarBorderPurple500 className={styles.anime_icon} />
                </span>
                {animeData.rating}
              </li>
            </ul>
            <p className={styles.anime_description}>
               {animeData.description}
            </p>

            <div className={styles.main_container}>
              <div className={styles.genre_container}>
                <p className={styles.title}>Genre:</p>
                <ul>
                  {animeData.genres.map((genre:any) => (
                    <li className={styles.genre} key={genre.genre_id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.tag_container}>
                <p className={styles.title}>Tag:</p>
                <ul>
                  {animeData.tags.map((tag:any) => (
                    <li className={styles.tag} key={tag.tag_id}>
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </footer>
        </section>
      </article>
    </main>
  );
};

export default AnimePreview;
