import fruitsalad from "../assets/Products/tropical-fruit-salad.png";
import waggyubeef from "../assets/Products/wagyu-beef.png";
import japaneserise from "../assets/Products/japanese-fried-rice.png";
import vegetarianTaco from "../assets/Products/vegetarian-meat.png";
import chcickensalad from "../assets/Products/chicken-salad.png";
import spicySandwich from "../assets/Products/sandwich-chips.png";
import veganLettuce from "../assets/Products/lettuce-wraps.png";
import ramen from "../assets/Products/chicken-ramen.png";
import RecipeItem from "./recipeItem";
import RecipeStyles from "../styles/componentStyles/recipe.module.css";
export type ProductItem = {
  id: number;
  name: string;
  image: string;
  category: string;
  ad?: boolean;
};

// type AdProp = {
//   item: ProductItem;
// };

const Products2: ProductItem[] = [
  {
    id: 1,
    name: "Mixed Tropical Fruit Salad with Superfood Boosts ",
    image: fruitsalad,
    category: "Healthy",
  },
  {
    id: 2,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    image: waggyubeef,
    category: "Healthy",
  },
  {
    id: 3,
    name: "Healthy Japanese Fried Rice with Asparagus",
    image: japaneserise,
    category: "Healthy",
  },
  {
    id: 4,
    name: "Cauliflower Walnut Vegetarian Taco Meat",
    image: vegetarianTaco,
    category: "Eastern",
  },
  {
    id: 5,
    name: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    image: chcickensalad,
    category: "Healthy",
  },
  {
    id: 6,
    name: "Barbeque Spicy Sandwiches with Chips",
    image: spicySandwich,
    category: "Healthy",
  },
  {
    id: 7,
    name: "Firecracker Vegan Lettuce Wraps - Spicy!",
    image: veganLettuce,
    category: "Seafood",
  },
  {
    id: 8,
    name: "Chicken Ramen Soup with Mushroom",
    image: ramen,
    category: "Japanese",
  },
];

export default function RecipeSection() {
  return (
    <div className={RecipeStyles["recipe-section"]}>
      <div>
        <h3>Try this delicious recipe to make your day</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      <div className={RecipeStyles["product-container"]}>
        {Products2.map((item) => (
          <RecipeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
