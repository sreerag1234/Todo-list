import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            id={todo.id}
            // selectedTodos={selectedTodos}
            // setSelectedTodos={setSelectedTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
