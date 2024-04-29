import React from "react";
import sitelogo from "./../../img/icons/logo_mega_ultra_muha_.png";
import styles from "./styles.module.css";
import { CiLogin } from "react-icons/ci";
import { ROUTES } from "../../routes/routes";

export const Header = () => {
  return (
    <div className={styles.header}>
    <div className={styles.header_container}>
      <a href={ROUTES.mainpage} className={styles.site_logo}>
        <img src={sitelogo} className={styles.img_size} alt="site logo" />
      </a>

      <div className={styles.menu_container}>
        <a className={styles.menu_item} href="">
          Homepage
        </a>
        <a href="" className={styles.menu_item}>
          Categories
        </a>
        <a href="" className={styles.menu_item}>
          Ourblog
        </a>
        <a href="" className={styles.menu_item}>
          Contacts
        </a>
      </div>
      <a href={ROUTES.login} className={styles.header_login}>
        <CiLogin className={styles.loginicon} />
      </a>
    </div></div>
  );
};
