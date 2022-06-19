import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import Starlist from "./components/Starlist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [starStatus, setStarStatus] = useState("");
  const [star, setStar] = useState([]);

  useEffect(() => {
    selectHandler();
  }, [todos, status]);
  useEffect(() => {
    starHandler();
  }, [todos, status]);

  const selectHandler = () => {
    switch (status) {
      case "Completed":
        setSelectedTodos(todos.filter((item) => item.completed === true));
        break;
      case "Not completed":
        setSelectedTodos(todos.filter((item) => item.completed === false));
        break;

      default:
        setSelectedTodos(todos);
        break;
    }
  };
  const starHandler = () => {
    setStar(todos.filter((item) => item.starred === true));
  };
  // const starHandler = () => {
  //   setStar(todos.filter((item) => item.starred === true));
  // };
  // const selectHandler = () => {
  //   switch (status) {
  //     case "completed":
  //       setStatus("completed");
  //       break;
  //     case "Not completed":
  //       setStatus("Not completed");
  //       break;

  //     default:
  //       setStatus("all");
  //       break;
  //   }
  // };

  return (
    <div className="App">
      <header>
        <h1 id="main">TO-DO LIST</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        // status={status}
        setStatus={setStatus}
        // selectedTodos={selectedTodos}
        // setSelectedTodos={setSelectedTodos}
      />
      <Starlist
        star={star}
        todos={todos}
        setTodos={setTodos}
        setStar={setStar}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        selectedTodos={selectedTodos}
        setStarStatus={setStarStatus}
        setStar={setStar}
        // setSelectedTodos={setSelectedTodos}
      />
    </div>
  );
}

export default App;

// import React, {useState}from 'react';
// import Form from './components/Form';
// import './App.css';

// function App(){
//   const []
//   return()
// }
