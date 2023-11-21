import React from "react";
import styles from "./items.module.css";
export default function Item({ food }) {
  return (
    <>
      {food.extendedIngredients.map((items, index) => (
        <div className={styles.main} key={index}>
          <div className={styles.imageCont}>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${items.image}`}
              alt=""
            />
          </div>
          <div className={styles.otherCont}>
            <div>
              <h3>{items.name}</h3>
            </div>
            <div>
              <h4>
                {items.amount} {items.unit}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
