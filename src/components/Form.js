import React from "react";

const Form = ({
  inputText,
  setTodos,
  setInputText,
  todos,
  // status,
  // setStatus,
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
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  // switch (status) {
  //   case "completed":
  //     setSelectedTodos(todos.filter((item) => (item.completed = true)));
  //     break;
  //   case "Not completed":
  //     setSelectedTodos(todos.filter((item) => (item.completed = false)));
  //     break;

  //   default:
  //     setSelectedTodos(todos);
  //     break;
  // }

  // const selectHandler = (e) => {
  //   switch (e.target.value) {
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
        <select name="todos" className="filter_todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="Not completed">Not completed</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
