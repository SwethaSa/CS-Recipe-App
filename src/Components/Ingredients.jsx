import React from "react";
import Item from "./Item";

export default function Ingredients({ food, isLoading }) {
  return (
    <>
      <h1>Ingredients : </h1>

      {isLoading ? <p>Loading...</p> : <Item food={food} />}
    </>
  );
}
