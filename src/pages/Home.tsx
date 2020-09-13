import React from "react";
import { PizzaBlock } from "../components";
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import Pizza from "../models/Pizza";

interface HomeProps {
  items: Pizza[];
}

const Home: React.FC<HomeProps> = ({ items }) => {
  console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Meat", "Vegetarian", "Grill", "Sharp", "Closed"]}
          onClick={(name) => console.log(name)}
        />
        <SortPopup items={["popular", "price", "alphabet"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => (
          <PizzaBlock key={item.id} pizza={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
