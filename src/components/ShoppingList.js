import React from "react";
import "../components/styles/ShoopinList.css";
import { plantList } from "../data/plantList";

const ShoppingList = () => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li>{cat}</li>
        ))}
      </ul>

      <ul className="lmj-plant-list">
        {plantList.map((plant, index) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer ? (
              <div className="lmj-sales">Soldes</div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
