import breakfast from "../assets/categories/breakfast.png";
import vegan from "../assets/categories/vegan.png";
import meat from "../assets/categories/meat.png";
import dessert from "../assets/categories/dessert.png";
import lunch from "../assets/categories/lunch.png";
import chocolate from "../assets/categories/chocolate.png";
import catStyles from "../styles/home.module.css";

type category = { id: number; name: string; image: string; shadow?: string };
const categoryData: category[] = [
  { id: 1, name: "Breakfast", image: breakfast, shadow: "#c8c3bca4" },
  { id: 2, name: "Vegan", image: vegan, shadow: "#178a1f2f" },
  { id: 3, name: "Meat", image: meat, shadow: "#ca1f164b" },
  { id: 4, name: "Dessert", image: dessert, shadow: "#c8c3bc6e" },
  { id: 5, name: "Lunch", image: lunch, shadow: "#e2a44e7a" },
  { id: 6, name: "Chocolate", image: chocolate, shadow: "#ca1f164b" },
];
export default function Categories() {
  return (
    <div className={catStyles.categories}>
      <div className={catStyles.header}>
        <h2>Categories</h2>
        <button>View All Categories</button>
      </div>

      <div className={catStyles["items-container"]}>
        {categoryData.map((item) => (
          <div className={catStyles.category} key={item.id}>
            <img
              style={{ filter: `drop-shadow( 29px 27px 18px ${item.shadow})` }}
              src={item.image}
              alt={`${item.name} image`}
            />

            <p>{item.name}</p>
            <div className={catStyles["gradient-box"]}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
