import styles from "./FoodItems.module.css";

function FoodItems({ fooditems, onBuy, onReset }) {
  return (
    <div className={styles.foodItemsContainer}>
      {fooditems.length === 0 ? (
        <h3>Still I am hungry</h3>
      ) : (
        <ul>
          {fooditems.map((item, index) => (
            <li key={index} className={styles.foodItem}>
              {item}{" "}
              <button onClick={() => onBuy(item)} className={styles.buyButton}>
                Buy
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onReset} className={styles.resetButton}>
        Reset
      </button>
    </div>
  );
}

export default FoodItems;
