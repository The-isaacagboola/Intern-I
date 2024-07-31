import cheeseBurger from "../assets/Products/beef-cheeseburger.png";
import salmon from "../assets/Products/salmon.png";
import strawberry from "../assets/Products/pancake.png";
import salad from "../assets/Products/salad.png";
import meatballs from "../assets/Products/meatballs.png";
import pancakeOrange from "../assets/Products/pancake-orange.png";
import chickenRice from "../assets/Products/one-pot-chicken1.png";
import creamyChicken from "../assets/Products/pasta.png";
import ad from "../assets/Products/Ads.png";
import Product from "./product.tsx";
import prodStyles from "../styles/componentStyles/products.module.css";

export type ProductItem = {
  id: number;
  name: string;
  image: string;
  category: string;
  ad?: boolean;
};

type AdProp = {
  item: ProductItem;
};

const Products1: ProductItem[] = [
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    image: cheeseBurger,
    category: "Snack",
  },
  {
    id: 2,
    name: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: salmon,
    category: "Fish",
  },
  {
    id: 3,
    name: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: strawberry,
    category: "Breakfast",
  },
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: salad,
    category: "Healthy",
  },
  {
    id: 5,
    name: "Chicken Meatballs with Cream Cheese",
    image: meatballs,
    category: "Meat",
  },
  {
    id: 6,
    name: "ad",
    image: ad,
    ad: true,
    category: "ad",
  },
  {
    id: 7,
    name: "Fruity Pancake with Orange & Blueberry",
    image: pancakeOrange,
    category: "Sweet",
  },
  {
    id: 8,
    name: "The Best Easy One Pot Chicken and Rice",
    image: chickenRice,
    category: "Snack",
  },
  {
    id: 9,
    name: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: creamyChicken,
    category: "Noodles",
  },
];

export function Ad({ item }: AdProp) {
  return <img src={item.image} alt="advert" />;
}

export default function ProductsDisplay() {
  return (
    <div className={prodStyles["product-container"]}>
      {Products1.map((item) =>
        !item.ad ? (
          <Product key={item.id} item={item} />
        ) : (
          <Ad key={item.id} item={item} />
        )
      )}
    </div>
  );
}
