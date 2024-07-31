import homeStyles from "../styles/componentStyles/hero.module.css";
import scroll from "../assets/scroll.png";
import timer from "../assets/Timer.png";
import fork from "../assets/ForkKnife.png";
import userImg from "../assets/john.png";
import { FaPlayCircle } from "react-icons/fa";
import heroImage from "../assets/homeHero.png";
export default function HomeHero() {
  return (
    <div className={homeStyles["hero-container"]}>
      <div className={homeStyles["design-divs"]}></div>

      <div className={homeStyles["hero-section"]}>
        <div className={homeStyles["text-section"]}>
          <div>
            <img src={scroll} alt="scroll" />
            <p>Hot Recipes</p>
          </div>

          <h2>Spicy delicious chicken wings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>

          <div className={homeStyles["timer-section"]}>
            <div>
              <img src={timer} alt="timer" />
              <p>30 Minutes</p>
            </div>

            <div>
              <img src={fork} alt="fork" />
              <p>Chicken</p>
            </div>
          </div>

          <div className={homeStyles["user-div"]}>
            <div>
              <img src={userImg} alt="user dp" />
              <div>
                <p className={homeStyles["user-name"]}>John Smith</p>
                <p>15 March 2022</p>
              </div>
            </div>

            <button>
              <p>View Recipes</p>
              <FaPlayCircle size={20} />
            </button>
          </div>
        </div>

        {/* <div> */}
        <img src={heroImage} alt="hero" />
      </div>

      <div className={homeStyles["design-divs"]}></div>
    </div>
  );
}
