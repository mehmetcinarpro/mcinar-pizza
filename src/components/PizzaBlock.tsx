import React, { useState } from "react";
import classNames from "classnames";
import Pizza from "../models/Pizza";
import PizzaType from "../models/PizzaType";
import PizzaSize from "../models/PizzaSize";
import { StringIsNumber } from "../helpers/String";

interface PizzaBlockProps {
  pizza: Pizza;
}

const PizzaBlock: React.FC<PizzaBlockProps> = ({ pizza }) => {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeSize, setActiveSize] = useState<number | null>(null);

  const onSelectType = (type: string) => {
    setActiveType(type);
  };
  const onSelectSize = (size: number) => {
    setActiveSize(size);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{pizza.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {Object.values(PizzaType).map((pizzaType) => {
            return (
              <li
                key={pizzaType}
                onClick={() => onSelectType(pizzaType)}
                className={classNames({
                  active: activeType === pizzaType,
                  disabled: !pizza.types.includes(pizzaType),
                })}
              >
                {pizzaType}
              </li>
            );
          })}
        </ul>
        <ul>
          {(Object.values(PizzaSize).filter(StringIsNumber) as PizzaSize[]).map(
            (pizzaSize) => (
              <li
                key={pizzaSize}
                onClick={() => onSelectSize(pizzaSize)}
                className={classNames({
                  active: activeSize === pizzaSize,
                  disabled: !pizza.sizes.includes(pizzaSize),
                })}
              >
                {pizzaSize}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {pizza.price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
