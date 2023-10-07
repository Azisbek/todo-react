import React, { useState } from "react";
import "./Form.css";

const Form = ({ addArrItemPost }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputImg, setInputImg] = useState("");

  const funcInputHandlerChange = (e) => {
    const nameInput = e.target.name;
    if (nameInput === "title") {
      setInputTitle(e.target.value);
    } else if (nameInput === "img") {
      setInputImg(e.target.value);
    }
  };

  const submitFunc = (e) => {
    e.preventDefault();
    const objTodo = {
      title: inputTitle,
      url: inputImg,
      id: Math.random().toString,
    };
    addArrItemPost(objTodo);
  };

  return (
    <form onSubmit={submitFunc}>
      <input
        onChange={funcInputHandlerChange}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        onChange={funcInputHandlerChange}
        type="url"
        name="img"
        placeholder="img"
      />
      <button>Onclick</button>
    </form>
  );
};

export default Form;
