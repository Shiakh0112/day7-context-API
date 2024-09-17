import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const TodoContextAPI = createContext();

export const TodoProvider = ({ children }) => {
  let URL =
    "https://todo-task-manger-default-rtdb.asia-southeast1.firebasedatabase.app/TodoTask";

  const [data, setData] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios.get(`${URL}.json`).then((res) => {
      setData(res.data || {});
    });
  }, [flag]);

  const addTodoTask = (Todo) => {
    axios
      .post(`${URL}.json`, Todo)
      .then(() => {
        setFlag(!flag); // Update the flag to trigger re-fetching of data
      })
      .catch((err) => {
        console.error("Error adding task:", err); // Handle potential errors
      });
  };

  const updateTask = (id, updatedTask) => {
    axios.patch(`${URL}/${id}.json`, updatedTask).then(() => {
      setFlag(!flag);
    });
  };
  const deleteTask = (id) => {
    axios.delete(`${URL}/${id}.json`, id).then(() => {
      setFlag(!flag);
    });
  };
  return (
    <TodoContextAPI.Provider
      value={{ data, addTodoTask, updateTask, deleteTask }}
    >
      {children}
    </TodoContextAPI.Provider>
  );
};
