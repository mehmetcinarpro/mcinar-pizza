import React, { useState } from "react";

interface CategoriesProps {
  items: string[];
  onClick: (item: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const onSelectItem = (item: string | null) => {
    setActiveItem(item);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? "active" : ""}
        >
          All
        </li>
        {items &&
          items.map((item) => (
            <li
              key={item}
              onClick={() => onSelectItem(item)}
              className={activeItem === item ? "active" : ""}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
