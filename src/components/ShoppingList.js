import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
function ShoppingList() {
  const categories = plantList.reduce(
    (accumulateur, plant) =>
      accumulateur.includes(plant.category)
        ? accumulateur
        : accumulateur.concat(plant.category),
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
          <PlantItem
            name={plant.name}
            cover={plant.cover}
            id={plant.id}
            water={plant.water}
            light={plant.light}
          />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
