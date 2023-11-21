import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Ingredients from "./Ingredients";

export default function FoodDetails({ foodId }) {
  let [food, setFood] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  let apiKey = "35a14e929af6462ba5e6ec26644ba091";
  let URL = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${apiKey}`;

  useEffect(() => {
    let recipeFetch = async () => {
      let res = await fetch(URL);
      let data = await res.json();
      setFood(data);
      console.log(data);
      setIsLoading(false);
    };
    recipeFetch();
  }, [foodId]);

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{food.title}</h1>
          <img
            className={styles.image}
            src={food.image}
            height="300px"
            width="400px"
            alt=""
          />
          <br />
          <div className={styles.spans}>
            <span>
              <strong>⌚ {food.readyInMinutes} Minutes </strong>
            </span>
            <span>
              <strong>👪🏻{food.servings}</strong>
            </span>

            <span>{food.vegetarian ? "🥦 Veg" : "🥩 Non-Veg"}</span>
            <span>{food.vegan ? "🐮 Vegan" : ""}</span>
          </div>
          <div className={styles.serving}>
            $ <span>{food.pricePerServing}</span>
          </div>
          <Ingredients food={food} isLoading={isLoading} />
          <h1 className={styles.instruction}>Instructions :</h1>
          <div>
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((val, index) => (
                  <li className={styles.list} key={index}>
                    {val.step}
                  </li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
