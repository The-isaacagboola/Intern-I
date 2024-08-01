import RecipeHeading from "../Components/RecipeHeading";
import "../styles/details.css";
import RecipeDetails from "../Components/recipedetails";
import Ingredients from "../Components/Ingredients";
import Directions from "../Components/Directions";
import NewsLetter from "../Components/NewsLetter";
import Suggestions from "../Components/Suggestions";

export default function Details() {
  return (
    <div className="detail">
      <RecipeHeading />

      <RecipeDetails />

      <Ingredients />

      <Directions />

      <div className="news">
        <NewsLetter />
      </div>

      <Suggestions />
    </div>
  );
}
