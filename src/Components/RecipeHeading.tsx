import user from "../assets/john.png";
import timer from "../assets/Timer.png";
import fork from "../assets/ForkKnife.png";
import print from "../assets/printer.png";
import share from "../assets/share.png";
import "../styles/componentStyles/recipeheading.css";
export default function RecipeHeading() {
  return (
    <div className="recipe">
      <div>
        <div>
          <h1>Health Japanese Fried Rice</h1>
          <div className="blocks">
            <div>
              <img src={user} alt="gohn" />
              <div>
                <h2>John Smith</h2>
                <p>15 March 2022</p>
              </div>
            </div>
            <div>
              <img src={timer} alt="timer" />
              <div>
                <h3>PREP TIME</h3>
                <p>15 Minutes</p>
              </div>
            </div>
            <div>
              <img src={timer} alt="timer" />
              <div>
                <h3>COOK TIME</h3>
                <p>15 Minutes</p>
              </div>
            </div>
            <div>
              <img src={fork} alt="timer" />
              <div>
                <p>Chicken</p>
              </div>
            </div>
          </div>
        </div>

        <div className="print">
          <div className="align">
            <div className="box">
              <img src={print} alt="print" />
            </div>
            <p>PRINT</p>
          </div>
          <div className="align">
            <div className="box">
              <img src={share} alt="sharre" />
            </div>
            <p>SHARE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
