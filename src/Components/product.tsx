import { ProductItem } from "./ProductsDisplay";
import styles from "../styles/componentStyles/products.module.css";
import timer from "../assets/Timer.png";
import fork from "../assets/ForkKnife.png";
import { MdFavorite } from "react-icons/md";
import CallGlobalContext from "../context/context";
import { useNavigate } from "react-router-dom";

type ProductProp = {
  item: ProductItem;
};

export default function Product({ item }: ProductProp) {
  const { changeSelected } = CallGlobalContext();
  const navigate = useNavigate();

  return (
    <div
      className={styles.product}
      onClick={() => {
        changeSelected(item);
        navigate("/recipe");
      }}
    >
      <img src={item.image} alt="item-image" />
      <div className={styles.favorite}>
        <MdFavorite size={24} />
      </div>

      <p>{item.name}</p>

      <div className={styles.category}>
        <div>
          <img src={timer} alt="timer" />
          <p>30 minutes</p>
        </div>
        <div>
          <img src={fork} alt="timer" />
          <p>{item.category}</p>
        </div>
      </div>
    </div>
  );
}
