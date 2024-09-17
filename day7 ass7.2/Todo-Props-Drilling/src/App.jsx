import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css"; // Custom styling
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const firebaseURL =
  "https://todo-task-manger-default-rtdb.asia-southeast1.firebasedatabase.app/TodoProps";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from Firebase
  useEffect(() => {
    axios
      .get(`${firebaseURL}.json`)
      .then((response) => {
        if (response.data) {
          const loadedTodos = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));
          setTodos(loadedTodos);
        }
      })
      .catch((error) =>
        console.error("Error fetching data from Firebase:", error)
      );
  }, []);

  // Add new todo
  const addTodo = (newTodo) => {
    const todoData = { text: newTodo, completed: false };
    axios.post(`${firebaseURL}.json`, todoData).then((response) => {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: response.data.name, ...todoData },
      ]);
    });
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete todo
  const deleteTodo = (id) => {
    axios.delete(`${firebaseURL}/${id}.json`).then(() => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    });
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
