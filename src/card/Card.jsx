import React, { useState } from "react";
import "./Card.css";

const Card = ({ array }) => {
  const [like, setLike] = useState(0);


  function clickLike() {
    setLike((state) => state + 1);
  }
  return (
    <div className="card">
      {array.map((el) => (
        <>
          <img src={el.url} alt="" />
          <h1>{el.title}</h1>
          <button onClick={clickLike}>like</button>
          <p>{like}</p>
        </>
      ))}
    </div>
  );
};

export default Card;
