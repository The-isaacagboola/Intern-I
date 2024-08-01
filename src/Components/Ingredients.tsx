import meatball from "../assets/Products/meatballs.png";
import pasta from "../assets/Products/chicken-ramen.png";
import chicken from "../assets/Products/one-pot-chicken.png";
import ads from "../assets/Products/Ads.png";
const data = [
  {
    id: 1,
    image: meatball,
    description: "Chicken Meatball with Creamy Chees...",
  },
  {
    id: 2,
    image: pasta,
    description: "The Creamiest Creamy Chicken an...",
  },
  {
    id: 3,
    image: chicken,
    description: "The Creamiest Creamy Chicken an...",
  },
];

export default function Ingredients() {
  return (
    <div className="grid-ingredients">
      <div className="ingrid">
        <h1>Ingredients</h1>

        <div className="choice">
          <h2>For main dish</h2>
          {[...Array(5)].map((_, i) => (
            <div className="padBox" key={i}>
              <input type="checkbox" name="main" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          ))}
        </div>

        <div className="choice secondItem">
          <h2>For the sauce</h2>
          {[...Array(3)].map((_, i) => (
            <div className="padBox" key={i}>
              <input type="checkbox" name="main" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          ))}
        </div>
      </div>

      <div className="others-container">
        <div>
          <h2>Other Recipe</h2>
          <div className="others-grid">
            {data.map((item) => (
              <div className="others" key={item.id}>
                <img src={item.image} alt="image of product" />
                <div>
                  <h3>{item.description}</h3>
                  <p className="graay">By Andreas Paula</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img src={ads} alt="Advert image" />
      </div>
    </div>
  );
}
