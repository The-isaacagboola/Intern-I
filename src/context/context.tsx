import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import japaneserise from "../assets/Products/japanese-fried-rice.png";

type Items = {
  id: number;
  name: string;
  image: string;
  category: string;
};
// Define the context type
export type RecipeContextType = {
  selectedItem: Items;
  setSelectedItem: Dispatch<
    SetStateAction<{
      id: number;
      name: string;
      image: string;
      category: string;
    }>
  >;
  changeSelected: (prop: Items) => void;
};

// Create the context with a default value of `null`
export const RecipeContext = createContext<RecipeContextType | null>(null);

// Define the props type for the context provider
type GlobalContextProps = {
  children: ReactNode;
};

export function GlobalContext({ children }: GlobalContextProps) {
  const [selectedItem, setSelectedItem] = useState({
    id: 3,
    name: "Healthy Japanese Fried Rice with Asparagus",
    image: japaneserise,
    category: "Healthy",
  });

  function changeSelected(selected: Items) {
    setSelectedItem(selected);
  }
  return (
    <RecipeContext.Provider
      value={{ selectedItem, setSelectedItem, changeSelected }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export default function CallGlobalContext() {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
}
