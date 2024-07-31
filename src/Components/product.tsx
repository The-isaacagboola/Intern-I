import { ProductItem } from "./ProductsDisplay";
import timer from "../assets/Timer.png";
import fork from "../assets/ForkKnife.png";

type ProductProp = {
  item: ProductItem;
};

export default function Product({ item }: ProductProp) {
  return (
    <div>
      <img src={item.image} alt="item -image" />

      <p>{item.name}</p>

      <div>
        <div>
          <img src={timer} alt="timer" />
          <p>30 minutes</p>
        </div>
        <div>
          <img src={fork} alt="timer" />
          <p>30 minutes</p>
        </div>
      </div>
    </div>
  );
}
