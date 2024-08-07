import RecipeHeading from "../Components/RecipeHeading";
import "../styles/details.css";
import RecipeDetails from "../Components/recipedetails";
import Ingredients from "../Components/Ingredients";
import Directions from "../Components/Directions";
import NewsLetter from "../Components/NewsLetter";
import Suggestions from "../Components/Suggestions";
import CallGlobalContext from "../context/context";
import { useEffect } from "react";

export default function Details() {
  const { selectedItem } = CallGlobalContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <div className="detail">
      <RecipeHeading name={selectedItem.name} />

      <RecipeDetails image={selectedItem.image} />

      <Ingredients />

      <Directions />

      <div className="news">
        <NewsLetter />
      </div>

      <Suggestions />
    </div>
  );
}
