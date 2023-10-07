import "./App.css";
import React, { useState } from "react";
import Form from "./form/Form";
import Card from "./card/Card";

const mass = [];

function App() {
  const [arr, setArr] = useState(mass);

  const addArrItemPost = (newObj) => {
    setArr((prevArr) => {
      return [newObj, ...prevArr];
    });
  };

  return (
    <div className="App">
      <Form addArrItemPost={addArrItemPost} />
      <Card array={arr} />
    </div>
  );
}

export default App;
