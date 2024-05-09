import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ROUTES } from "../../routes/routes";

import styles from "./styles.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const routes = [
  {
    name: 'Home',
    route: ROUTES.mainpage
  },
  {
    name: 'Genre',
    route: ROUTES.genre
  },
  {
    name: 'Year',
    route: ROUTES.year
  }
]

export const Header = () => {
  // TODO NOTIFICATION SYSTEM
  const [hasNotification, setNotification] = useState(true)
  // TODO NOTIFICATION SYSTEM

  const location = useLocation();
  const comparePath = (route: string): Boolean => {
    const fullLocation: string =
      location.pathname + location.search.slice(0, location.search.indexOf('='))
    const fullPath: string = route.slice(0, route.indexOf('=')) || '/'
    return fullLocation === fullPath;
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        {
          routes.map(
            ({ route, name }) => <a
              href={route}
              key={route}
              className={`${styles.navLink} 
              ${comparePath(route) && styles.activePage}`}
            >
              {name}
            </a>
          )
        }
      </nav>
      <div className={styles.searchBar}>
        <input type="text" className={styles.searchInput} placeholder='Search anime...' />
        <FiSearch className={styles.searchIcon} />
      </div>
      <div className={styles.userInterface}>
        <a href={ROUTES.login} className={styles.loginLink}>
          Login <FaRegUser className={styles.loginIcon} />
        </a>
        {/* TODO AUTHED TO PROFILE LINK */}
        <button className={`${styles.notificationButton}
        ${hasNotification && styles.hasNotification}`}>
          <IoIosNotificationsOutline className={styles.notificationIcon} />
        </button>
      </div>
    </header>
    // <div className={styles.header}>
    // <div className={styles.header_container}>
    //   <a href={ROUTES.mainpage} className={styles.site_logo}>
    //     <img src={sitelogo} className={styles.img_size} alt="site logo" />
    //   </a>

    //   <div className={styles.menu_container}>
    //     <a className={styles.menu_item} href="">
    //       Homepage
    //     </a>
    //     <a href="" className={styles.menu_item}>
    //       Categories
    //     </a>
    //     <a href="" className={styles.menu_item}>
    //       Ourblog
    //     </a>
    //     <a href="" className={styles.menu_item}>
    //       Contacts
    //     </a>
    //   </div>
    //   <a href={ROUTES.login} className={styles.header_login}>
    //     <CiLogin className={styles.loginicon} />
    //   </a>
    // </div></div>
  );
};
