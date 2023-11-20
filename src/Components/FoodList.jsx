import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <>
      {foodData.map((food, index) => (
        <FoodItem key={food.id} setFoodId={setFoodId} food={food} />
      ))}
    </>
  );
}
