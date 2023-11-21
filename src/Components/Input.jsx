import React, { useEffect, useState } from "react";
import styles from "./input.module.css";

export default function Input({ foodData, setFoodData }) {
  let [query, setQuery] = useState("jamun");

  let handleChange = (e) => {
    setQuery(e.target.value);
  };
  let apiKey = "dda57e39c5a6425eb6d9435e302dab03";
  let URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
  useEffect(() => {
    let myFood = async () => {
      let res = await fetch(URL);
      let data = await res.json();
      setFoodData(data.results);
    };
    myFood();
  }, [query]);
  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Enter a Food Name..."
        />
      </div>
      <br />
      <br />
    </>
  );
}
