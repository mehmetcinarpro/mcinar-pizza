import PizzaSize from "./PizzaSize";
import PizzaType from "./PizzaType";

export default interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  types: string[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}
