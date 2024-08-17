import { useState } from "react";
import Title from "./components/Title";
import FoodItems from "./components/FoodItems";
import styles from "./App.module.css";

function App() {
  const [fooditems, setFooditems] = useState([
    "Burger",
    "Pizza",
    "Biryani",
    "Daal",
    "Meal",
  ]);
  const [inputValue, setInputValue] = useState("");

  // Function to handle adding a new food item
  const handleAddFood = () => {
    if (inputValue.trim()) {
      setFooditems([...fooditems, inputValue.trim()]);
      setInputValue(""); // Clear input field
    }
  };

  // Function to handle buying a food item
  const handleBuyFood = (item) => {
    alert(`You bought ${item}!`);
  };

  // Function to handle resetting the food items list
  const handleReset = () => {
    setFooditems([]);
  };

  return (
    <div className={styles.container}>
      <Title />
      <div className={styles.content}>
        <FoodItems
          fooditems={fooditems}
          onBuy={handleBuyFood}
          onReset={handleReset}
        />
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a food item"
        className={styles.input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddFood();
          }
        }}
      />
      <button onClick={handleAddFood} className={styles.buttonRight}>
        Add Food
      </button>
    </div>
  );
}

export default App;
