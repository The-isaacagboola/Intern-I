import hero from "../assets/recipeHero.png";

export default function RecipeDetails() {
  return (
    <div>
      <div className="grid-hero">
        <img src={hero} alt="iktem image" />

        <div className="nutrition">
          <div>
            <h2>Nutrition Information</h2>
            <div className="qty">
              <p>
                Calories <span>219.9 kcal</span>
              </p>
              <p>
                Total Fat <span>10.7 g</span>
              </p>
              <p>
                Protein <span>7.9 g</span>
              </p>
              <p>
                Carbohydrate <span>22.3 g</span>
              </p>
              <p>
                {" "}
                Cholesterol<span>37.4 mg</span>
              </p>
            </div>
          </div>
          <p className="last">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>

      <p className="grey-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
