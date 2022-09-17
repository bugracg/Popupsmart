import { useTodoLayerValue } from "../context/ToDoContext";
import { useState, useRef, useEffect } from "react";
import React from "react";
import TodoList from "../components/TodoList";

import "./Edit.css";

const Edit = () => {
  const getTodos = () => {
    fetch("https://631c61021b470e0e12007043.mockapi.io/todo", {
      method: "POST",
      body: JSON.strizngify({
        content: "Todocon",
      }),
    });

    fetch("https://631c61021b470e0e12007043.mockapi.io/todo")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  };

  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    console.log(content);
    event.preventDefault();

    if (!content && content.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random()),
      content: content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(event) => setContent(event.target.value)}
          value={content}
          ref={inputRef}
        />
        <button onClick={getTodos} className="todo-button">
          Add
        </button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};

export default Edit;
