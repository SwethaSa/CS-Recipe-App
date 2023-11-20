import { useState } from "react";
import Input from "./Components/Input.jsx";
import FoodList from "./Components/FoodList.jsx";
import "./Components/App.css";
import Container from "./Components/Container.jsx";
import InnerContainer from "./Components/InnerContainer.jsx";
import FoodDetails from "./Components/FoodDetails.jsx";

function App() {
  let [foodData, setFoodData] = useState([]);
  let [foodId, setFoodId] = useState("782585");

  return (
    <>
      <h1 className="nav">🍔 Food</h1>
      <Input foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList
            foodId={foodId}
            setFoodId={setFoodId}
            foodData={foodData}
            setFoodData={setFoodData}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
