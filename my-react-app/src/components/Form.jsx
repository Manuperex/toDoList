import React from "react";
import { useState } from "react";
import { mediaQueryTablet, mediaQuerymobile, mediaQueryDesktop } from "../mediaQuery"

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");
    const [id, setID] = useState()
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setID (Math.floor(Math.random() * 99))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() ==="") return;

        addTodo({ title: inputValue, completed: false, id });
        setInputValue("");
    }
  return (
    <form className="ui form" onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className={mediaQuerymobile ? "column middle aligned eight wide" : mediaQueryTablet ? "column middle aligned nine wide" : mediaQueryDesktop? "column middle aligned nine wide" : "column middle aligned nine wide"}>
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter something to do..."
            />
          </div>
          <div className="column middle aligned two wide ">
            <button id="btn-input" type="submit" className={mediaQuerymobile ? "ui large button circular icon" : "ui huge button circular icon"}>
              <i className={mediaQuerymobile ? "large white plus square outline icon" : mediaQueryTablet ? "big white plus square outline icon" : "huge white plus square outline icon"}></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
