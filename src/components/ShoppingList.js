import { plantList } from '../data/plantList'
import PlantItem from './PlantItem'
import '../components/styles/ShoopinList.css'

function ShoppingList() {
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
        <ul className='lmj-plant-list'>
          {plantList.map(({ id, cover, name, water, light }) => (
            <PlantItem
              key={id} 
              id={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
            />
          ))}
        </ul>
      </div>
    );
  }
  
  export default ShoppingList;