import React from "react";
import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <>
      <div className={styles.main}>
        <img className={styles.image} src={food.image} alt="food" />
        <h1 className={styles.head}>{food.title}</h1>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.btn}
        >
          View Recipe
        </button>
      </div>
    </>
  );
}
