import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../styles/componentStyles/Nav.module.css";
export default function Nav() {
  return (
    <div className={styles["nav-container"]}>
      <nav className={styles.nav}>
        <Logo ftSize={"24px"} />

        <ul className={styles.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipe">Recipes</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>

        <ul className={styles.medialinks}>
          <li>
            <Link to="https://web.facebook.com/profile.php?id=100008521230306&_rdc=1&_rdr">
              <FaFacebookF size={22} />
            </Link>
          </li>
          <li>
            <Link to="/https://x.com/the_isaacagbola">
              <FaTwitter size={22} />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/The-isaacagboola">
              <FaInstagram size={22} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
