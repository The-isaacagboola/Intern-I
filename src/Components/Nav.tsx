import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Nav() {
  return (
    <nav>
      <Logo ftSize={"24px"} />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
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

      <ul>
        <li>
          <Link to="/">
            <FaFacebookF size={22} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaTwitter size={22} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaInstagram size={22} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
