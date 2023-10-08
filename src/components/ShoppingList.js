import React from "react";
import '../components/styles/ShoopinList.css'
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
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name} 
            {plant.isBestSale && <span>🔥</span>}
            {plant.isSpecialOffer && <div className="lmj-sales">soldes</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
