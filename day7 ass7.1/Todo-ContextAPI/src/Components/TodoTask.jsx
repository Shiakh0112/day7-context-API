import React, { useRef, useContext } from "react";
import { TodoContextAPI } from "../contextAPI/TodoContext";
import TodoItems from "./TodoItems";

function TodoTask() {
  const { data, addTodoTask } = useContext(TodoContextAPI);

  const TodoTask = useRef("");
  const UserName = useRef("");
  const EditAccess = useRef(false);

  function HandleSubmit(e) {
    e.preventDefault();
    let obj = {
      TodoTask: TodoTask.current.value,
      UserName: UserName.current.value,
      EditAccess: EditAccess.current.checked,
    };
    addTodoTask(obj);
    console.log(data);

    TodoTask.current.value = "";
    UserName.current.value = "";
    EditAccess.current.checked = false;
  }

  // Inline Styles
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    maxWidth: "400px",
    margin: "0 auto",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Todo Task Manager using Context API</h2>

      <form onSubmit={HandleSubmit} style={formStyle}>
        <input
          ref={TodoTask}
          type="text"
          placeholder="What's the todo"
          style={inputStyle}
        />
        <input
          ref={UserName}
          type="text"
          placeholder="Who's Creating it"
          style={inputStyle}
        />
        <label htmlFor="Edit">
          Edit Access
          <input
            ref={EditAccess}
            type="checkbox"
            style={{ marginLeft: "10px" }}
          />
        </label>
        <input type="submit" value="Add Todo" style={buttonStyle} />
      </form>

      <TodoItems />
    </div>
  );
}

export default TodoTask;
