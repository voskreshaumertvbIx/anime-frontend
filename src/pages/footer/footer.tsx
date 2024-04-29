// Footer.js

import React from "react";
import styles from "./style.module.css";
import { FaHeart } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFaceLaughSquint } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.socialIcon_footer}>
        <a
          className={styles.selfIcon}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className={styles.selfImg} />
        </a>
        <a
          className={styles.selfIcon}
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className={styles.selfImg} />
        </a>
        <a
          className={styles.selfIcon}
          href="https://www.hentai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFaceLaughSquint className={styles.selfImg} />
        </a>
      </div>
      <span className={styles.footer_text}>
        Copyright ©2024 All rights reserved | This template is made with
        <FaHeart /> by Ukrainian emo boys
      </span>
    </div>
  );
};
