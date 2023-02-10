import React from "react";
import Todo from "./Todo"
const List = ({ list, removeTodoListProp }) => {
    const renderdList = list.map((item) => <Todo  title={item.title} completed={item.completed} 
    removeTodoItemProp={(e) => removeTodoListProp(item._id)} key={item._id} />)
  return (
    <div className="ui grid center aligned">
      {renderdList}
    </div>
  );
};
export default List;
