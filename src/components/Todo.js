import React from "react";

const Todo = ({
  text,
  todo,
  todos,
  setTodos,
  id,
  starred,
  setStar,
  setStarStatus,
}) => {
  const deleteHandler = (e) => {
    // console.log("hello");
    // console.log(todo.text);
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const starStatusHandler = () => {
    // setStarStatus = !starred;
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            starred: !item.starred,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="fas fa-check"></button>
      <button onClick={deleteHandler} className="fas fa-trash"></button>
      <button onClick={starStatusHandler} className="fas fa-star"></button>
    </div>
  );
};

export default Todo;
