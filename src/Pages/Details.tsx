import RecipeHeading from "../Components/RecipeHeading";
import "../styles/details.css";
import RecipeDetails from "../Components/recipedetails";
import Ingredients from "../Components/Ingredients";
import Directions from "../Components/Directions";
import NewsLetter from "../Components/NewsLetter";
import Suggestions from "../Components/Suggestions";
import CallGlobalContext from "../context/context";

export default function Details() {
  const { selectedItem } = CallGlobalContext();

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
