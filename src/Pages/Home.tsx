import HomeHero from "../Components/homeHero";
import homeStyles from "../styles/home.module.css";
import Categories from "../Components/Categories.tsx";
import ProductsDisplay from "../Components/ProductsDisplay.tsx";
export default function Home() {
  return (
    <div>
      <HomeHero />
      <div className={homeStyles["padded-section"]}>
        <Categories />

        <div className={homeStyles["products-heading"]}>
          <h2>Simple and tasty recipes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>

        <ProductsDisplay />
      </div>
    </div>
  );
}
