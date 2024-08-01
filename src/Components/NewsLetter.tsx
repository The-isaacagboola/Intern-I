import newsStyles from "../styles/componentStyles/newsletter.module.css";
import leftImage from "../assets/subscribe1.png";
import rightImage from "../assets/subscribe2.png";
import leaf from "../assets/subscribe--leaf.png";

export default function NewsLetter() {
  return (
    <div className={newsStyles["newsletter-container"]}>
      <div className={newsStyles.newsletter}>
        <h3>Deliciousness to your inbox</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>

        <div className={newsStyles["email-section"]}>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address..."
          />

          <button>Subscribe</button>
        </div>

        <img className={newsStyles.left} src={leftImage} alt="design image" />
        <img className={newsStyles.leaf} src={leaf} alt="design image" />
        <img className={newsStyles.right} src={rightImage} alt="design image" />
      </div>
    </div>
  );
}
