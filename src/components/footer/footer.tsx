

import styles from "./style.module.css";

export const Footer = () => {
 
  return (
    <>
    <div className={styles.footer_container}>
      <section className={styles.text_section}>
      <p>Project Anime © 2024.</p>
      <p>Star World Anime - by Ukrainian emo boys</p>
      </section>
      <section className={styles.privacy_section}>
    <button className={styles.button_item}>Agreement</button>
    <button className={styles.button_item}>Copyright Holders</button>
    <button className={styles.button_item}>All anime</button>
      </section>
    </div>
    </>
  );
};
