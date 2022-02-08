import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import { useState } from "react/cjs/react.development";
import Categories from "./Categories";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (accumulateur, plant) =>
      accumulateur.includes(plant.category)
        ? accumulateur
        : accumulateur.concat(plant.category),
    []
  );
  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map((plant) =>
          !activeCategory || activeCategory === plant.category ? (
            <div key={plant.id}>
              <PlantItem
                name={plant.name}
                cover={plant.cover}
                water={plant.water}
                light={plant.light}
                price={plant.price}
              />
              <button button onClick={() => addToCart(plant.name, plant.price)}>
                Ajouter
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}
export default ShoppingList;
