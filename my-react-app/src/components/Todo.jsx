import React, { useState } from "react";

const Todo = ({ title, completed, removeTodoItemProp }) => {
  const [Value, setvalue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompleted] = useState(completed)


  const handleDivDubleClick = () => {
    setIsEditing(true);
  };
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
        <div className="column nine wide" onDoubleClick={handleDivDubleClick}>
          <h5 id="list" className={"ui center aligned header " + (completedState ? " green" : "")}>{Value}</h5>
        </div>
  
        <div className="column middle aligned tiny three wide">
          <button 
          className={"ui button  circular icon " + (completedState ? " blue": "green")}
          onClick={handleButtonClick}
          >
            <i className="large check icon"></i>
          </button>

        </div>
        <div className="column middle aligned tiny three wide">
          <button 
          id="btn-delete"
          className="ui button circular icon"
          onClick={removeTodoItemProp}>
            <i className="large white trash alternate outline icon"></i>
          </button>
        </div>
        </>
    }
  </div>
  );
};
export default Todo;
