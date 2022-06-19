import React from "react";
import Todo from "./Todo";

const Todolist = ({
  todos,
  setTodos,
  selectedTodos,
  setStar,
  setStarStatus,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {selectedTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            selectedTodos={selectedTodos}
            setTodos={setTodos}
            text={todo.text}
            starred={todo.starred}
            id={todo.id}
            setStar={setStar}
            setStarStatus={setStarStatus}
            // selectedTodos={selectedTodos}
            // setSelectedTodos={setSelectedTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
