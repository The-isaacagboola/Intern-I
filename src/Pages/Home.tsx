import HomeHero from "../Components/homeHero";
import homeStyles from "../styles/home.module.css";
import Categories from "../Components/Categories.tsx";
import ProductsDisplay from "../Components/ProductsDisplay.tsx";
import chef from "../assets/Group 880.png";
import InstagramSection from "../Components/InstagramSection.tsx";
import SectionHeading from "../Components/sectionHeading.tsx";

export default function Home() {
  const firstHeading = "Simple and tasty recipes";
  const firstParagraph =
    "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim";

  return (
    <div>
      <HomeHero />
      <div className={homeStyles["padded-section"]}>
        <Categories />

        <SectionHeading head={firstHeading} paragraph={firstParagraph} />

        <ProductsDisplay />

        <div className={homeStyles["learn-more"]}>
          <div>
            <h3>Everyone can be a chef in their own kitchen</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>

            <button>Learn More</button>
          </div>
          <img src={chef} alt="chef" />
        </div>

        <InstagramSection />
      </div>
    </div>
  );
}
