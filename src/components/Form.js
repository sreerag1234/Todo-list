import React from "react";

const Form = ({
  inputText,
  setTodos,
  setInputText,
  todos,
  // status,
  setStatus,
  // selectedTodos,
  // setSelectedTodos,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        starred: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    switch (e.target.value) {
      case "Completed":
        setStatus("Completed");
        break;
      case "Not completed":
        setStatus("Not completed");
        break;

      default:
        setStatus("All");
        break;
    }
  };
  // const statusHandler = (e) => {
  //   setStatus(e.target.value);
  // };
  return (
    <form id="form">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo_input"
      />
      <button onClick={submitTodoHandler} type="submit" className="todo_button">
        <i className="fas fa-plus center"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter_todos">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not completed">Not completed</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
