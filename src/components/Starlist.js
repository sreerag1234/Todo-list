import React from "react";
import Star from "./Star";

const Starlist = ({ star, todos, setTodos, setStar }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {star.map((stardo) => (
          <Star
            stardo={stardo}
            star={star}
            todos={todos}
            // selectedTodos={selectedTodos}
            setTodos={setTodos}
            text={stardo.text}
            // starred={stardo.starred}
            id={stardo.id}
            setStar={setStar}
            // setStarStatus={setStarStatus}
            // selectedTodos={selectedTodos}
            // setSelectedTodos={setSelectedTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default Starlist;
