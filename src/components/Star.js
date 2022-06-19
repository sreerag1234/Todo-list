import React from "react";

const Star = ({ stardo, star, text, id, todos, setTodos, setStar }) => {
  // const deleteHandler = (e) => {
  //   console.log("hello");
  //   // // console.log(todo.text);
  //   // setTodos(todos.filter((el) => el.id !== stardo.id));
  // };
  // const completeHandler = () => {
  //   this.setTodos(
  //     todos.map((item) => {
  //       if (item.id === stardo.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };
  const starStatusHandler = () => {
    // setStarStatus = !starred;
    setStar(star.filter((el) => el.id !== stardo.id));
  };

  return (
    <div className="todo">
      <li>{text}</li>
      {/* <button onClick={completeHandler} className="fas fa-check"></button>
      <button onClick={deleteHandler} className="fas fa-trash"></button> */}
      <button onClick={starStatusHandler} className="fas fa-star"></button>
    </div>
  );
};

export default Star;
