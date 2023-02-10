import React, { useState } from "react";
import { mediaQueryTablet, mediaQuerymobile, mediaQueryDesktop } from "../mediaQuery"

const Todo = ({ title, completed, removeTodoItemProp }) => {
  const [Value, setvalue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompleted] = useState(completed)

  const handleInputKeyDown = (e) => {
    const key = e.keycode;

    if (key === 13) {
        setvalue(tempValue)
      setIsEditing(false);
    } else if (key === 27) {
        setTempValue(Value);
        setIsEditing(false);
    }
  };

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleButtonClick = (e) => {
    setCompleted((oldCompleted) => !oldCompleted);
  };

  return (
  <div className="row ">
    {
    isEditing ?
    
        <div className="column seven wide">
          <div className="ui input fluid">
            <input
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
              autoFocus={true}
              value={tempValue}
            />
          </div>
        </div>
     : 
        <>
        <div className={mediaQuerymobile ? "column nine wide" : mediaQueryTablet ? "column seven wide" : mediaQueryDesktop? "column six wide" : "column six wide"}>
          <h5 id="list" className={"ui center aligned header " + (completedState ? " green" : "")}>{Value}</h5>
        </div>
        <div className={mediaQuerymobile ? "column middle aligned tiny three wide": mediaQueryTablet ? "column middle aligned tiny two wide" : mediaQueryDesktop? "column middle aligned tiny three wide" : "column middle aligned tiny two wide"}>
          <button 
          className={(mediaQuerymobile ? "ui large button  circular icon " : mediaQueryTablet ? "ui big button  circular icon " : "ui huge button  circular icon ") + (completedState ? " blue": "green")}
          onClick={handleButtonClick}
          >
            <i className={mediaQuerymobile ? "large check icon" : mediaQueryTablet ? "big check icon" : "huge check icon"}></i>
          </button>

        </div>
        <div className={mediaQuerymobile ? "column middle aligned tiny three wide" : mediaQueryTablet ? "column middle aligned tiny two wide" : mediaQueryDesktop? "column middle aligned tiny three wide" : "column middle aligned tiny two wide"}>
          <button 
          id="btn-delete"
          className={mediaQuerymobile ? "ui large button circular icon" : mediaQueryTablet ? "ui big button circular icon" : "ui huge button circular icon"}
          onClick={removeTodoItemProp}>
            <i className={mediaQuerymobile ? "large white trash alternate outline icon" : mediaQueryTablet ? "big white trash alternate outline icon" : "huge white trash alternate outline icon"}></i>
          </button>
        </div>
        </>
    }
  </div>
  );
};
export default Todo;
