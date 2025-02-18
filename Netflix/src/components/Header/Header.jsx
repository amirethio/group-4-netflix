import styles from "./header.module.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

import logo from "./../../assets/images/logo.png";
function Header() {
  return (
   
      <div className={styles.header_contaner}>
        {/* left container */}
        <div className={styles.header_contaner_left}>
          <ul>
            <li>
              <img src={logo} alt="" />
            </li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        {/* right container */}
        <div className={styles.header_contaner_right}>
          <IoSearch />
          <MdOutlineNotifications />
          <MdContactPage />
          <IoMdArrowDropdown />
        </div>
      </div>
  );
}

export default Header;
