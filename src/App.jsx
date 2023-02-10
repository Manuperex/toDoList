import React, { useState, useEffect } from "react";
import "./App.css"
import Footer from "./components/Footer"
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle = "Lista de Pendientes";

const list = [];

function App() {
  //hola mundo lola
  const [todoList, setTodoList] = useState(list);
  useEffect(() => {
    //Realiza la peticion a otro servidor de forma asincronica
    async function fetchData() {
      
        // const response = await fetch('https://backend-todolistdos.onrender.com/todos');
        const response = await fetch('https://backend-todolistdos.onrender.com/todos');
        const data = await response.json(); //Convierte la respuesta en un archivo json
        setTodoList(data);
        // console.log(data[0]._id);
    }

    fetchData();
}, []);

  const addTodo = (item) => {
    setTodoList((oldlist) => [...oldlist, item]);
  };

  const removeTodo = (id) => {
    let salida={"id": id }
    const  body= JSON.stringify(salida);

    const requestInit = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: body
    };
    
    async function fetchData() {
      // const response = await fetch('https://backend-todolistdos.onrender.com/todos');
      const response = await fetch(
        "https://backend-todolistdos.onrender.com/todos/remove",
        requestInit
      );
      const data = await response.json(); //Convierte la respuesta en un archivo json
      
      // console.log(data[0]._id);
    }
    fetchData()
    setTodoList((oldlist) =>
      oldlist.filter((item) => {
        return item._id !== id;
      })
    );
  };
  return (
    <div className="container-init">
      <div className="ui container center aligned fluid" id="container-all">
         <Section>
          <h1 className="title">
            {appTitle}
          </h1>
        
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List list={todoList} removeTodoListProp={removeTodo} />
      </Section>
      </div>
        <Footer />
    </div>
  );
}

export default App;