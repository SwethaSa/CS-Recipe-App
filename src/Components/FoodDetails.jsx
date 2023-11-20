import React, { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  let [food, setFood] = useState({});
  let apiKey = "5347978895fc4e2ea96d9a2e5df9ff41";
  let URL = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${apiKey}`;
  console.log({ URL });

  useEffect(() => {
    let recipeFetch = async () => {
      let res = await fetch(URL);
      let data = await res.json();
      setFood(data);
    };
    recipeFetch();
  }, [food]);
  return (
    <div>
      Food {foodId}
      <img src={food.image} height="150px" width="150px" alt="" />
      {food.name}
    </div>
  );
}
