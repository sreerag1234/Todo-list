import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  // const [status, setStatus] = useState("all");
  // const [selectedTodos, setSelectedTodos] = useState([]);

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
        // setStatus={setStatus}
        // selectedTodos={selectedTodos}
        // setSelectedTodos={setSelectedTodos}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        // selectedTodos={selectedTodos}
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
