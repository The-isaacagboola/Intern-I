import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../styles/componentStyles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["nav-container"]}>
        <nav className={styles.nav}>
          <div>
            <Logo ftSize={"24px"} />

            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit. </p>
          </div>

          <ul className={styles.links}>
            <li>
              <Link to="/">Recipes</Link>
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
        </nav>
      </div>

      <div className={styles.bottomDiv}>
        <p>
          © 2020 Flowbase. Built by{" "}
          <a href="https://github.com/The-isaacagboola">The-isaacagboola</a>
        </p>

        <ul className={styles.medialinks}>
          <li>
            <Link to="https://github.com/The-isaacagboola">
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
      </div>
    </div>
  );
}

/*

 
*/
