import React from "react";
import { useContext } from "react";
import { TodoContextAPI } from "../contextAPI/TodoContext";

function TodoItems() {
  const { data, updateTask, deleteTask } = useContext(TodoContextAPI);

  function HandleUpdate(id) {
    let TodoTask = prompt("Provide updated todo ");
    let UserName = prompt("Provide updated user");

    let obj = { TodoTask, UserName };
    updateTask(id, obj);
  }

  function HandleDelete(id) {
    deleteTask(id);
  }

  // Inline Styles
  const todoContainerStyle = {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#e9ecef",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "10px auto",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  };

  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      {Object.entries(data).map(([id, value], i) => {
        return (
          <div
            key={i}
            style={todoContainerStyle}
            className="Todo-Items-Container"
          >
            <p>
              <b>Todo:</b> {value.TodoTask}
            </p>
            <p>
              <b>User:</b> {value.UserName}
            </p>

            {value.EditAccess ? (
              <div style={buttonContainerStyle} className="buttons">
                <button
                  style={{
                    ...buttonStyle,
                    backgroundColor: "#28a745",
                    color: "white",
                  }}
                  onClick={() => HandleUpdate(id)}
                >
                  Update
                </button>
                <button
                  style={{
                    ...buttonStyle,
                    backgroundColor: "#dc3545",
                    color: "white",
                  }}
                  onClick={() => HandleDelete(id)}
                >
                  Delete
                </button>
              </div>
            ) : (
              <h3>Read only</h3>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TodoItems;
