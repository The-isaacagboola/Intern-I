import fruitsalad from "../assets/Products/tropical-fruit-salad.png";
import waggyubeef from "../assets/Products/wagyu-beef.png";
import japaneserise from "../assets/Products/japanese-fried-rice.png";
import vegetarianTaco from "../assets/Products/vegetarian-meat.png";
import RecipeStyles from "../styles/componentStyles/recipe.module.css";
import RecipeItem from "./recipeItem";

const Products = [
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
];

export default function Suggestions() {
  return (
    <div className="suggestions">
      <h1>You may like these recipe too</h1>

      <div className={RecipeStyles["product-container"]}>
        {Products.map((item) => (
          <RecipeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
