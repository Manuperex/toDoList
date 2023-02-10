import React from "react";
import { useState } from "react";
import {
  mediaQueryTablet,
  mediaQuerymobile,
  mediaQueryDesktop,
} from "../mediaQuery";

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [id, setID] = useState();
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    addTodo({ title: inputValue, completed: false });
    let salida={"title": inputValue, "completed": false }
    console.log(typeof salida);
    console.log(salida);
    const  body= JSON.stringify(salida);
    const requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: body
    };
    console.log(requestInit);
    async function fetchData() {
      // const response = await fetch('https://backend-todolistdos.onrender.com/todos');
      const response = await fetch(
        "https://backend-todolistdos.onrender.com/todos/new",
        requestInit
      );
      const data = await response.json(); //Convierte la respuesta en un archivo json
      console.log(data);
      // console.log(data[0]._id);
    }

    fetchData();
    setInputValue("");
  };

  return (
    <form className="ui form" onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div
            className={
              mediaQuerymobile
                ? "column middle aligned eight wide"
                : mediaQueryTablet
                ? "column middle aligned nine wide"
                : mediaQueryDesktop
                ? "column middle aligned nine wide"
                : "column middle aligned nine wide"
            }
          >
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter something to do..."
            />
          </div>
          <div className="column middle aligned two wide ">
            <button
              id="btn-input"
              type="submit"
              className={
                mediaQuerymobile
                  ? "ui large button circular icon"
                  : "ui huge button circular icon"
              }
            >
              <i
                className={
                  mediaQuerymobile
                    ? "large white plus square outline icon"
                    : mediaQueryTablet
                    ? "big white plus square outline icon"
                    : "huge white plus square outline icon"
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
