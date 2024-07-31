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

export type ProductItem = {
  id: number;
  name: string;
  image: string;
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
  },
  {
    id: 2,
    name: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: salmon,
  },
  {
    id: 3,
    name: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: strawberry,
  },
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: salad,
  },
  {
    id: 5,
    name: "Chicken Meatballs with Cream Cheese",
    image: meatballs,
  },
  {
    id: 6,
    name: "ad",
    image: ad,
    ad: true,
  },
  {
    id: 7,
    name: "Fruity Pancake with Orange & Blueberry",
    image: pancakeOrange,
  },
  {
    id: 8,
    name: "The Best Easy One Pot Chicken and Rice",
    image: chickenRice,
  },
  {
    id: 9,
    name: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: creamyChicken,
  },
];

export function Ad({ item }: AdProp) {
  return <img src={item.image} alt="advert" />;
}

export default function ProductsDisplay() {
  return (
    <div>
      {Products1.map((item) =>
        !item.ad ? <Product item={item} /> : <Ad item={item} />
      )}
    </div>
  );
}
