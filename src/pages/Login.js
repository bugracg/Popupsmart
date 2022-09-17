import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const getTodos = () => {
    fetch("https://631c61021b470e0e12007043.mockapi.io/todo", {
      method: "POST",
      body: JSON.stringify({
        content: "Todocon",
      }),
    });

    fetch("https://631c61021b470e0e12007043.mockapi.io/todo")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="page">
        <div className="cover">
          <h1>To Do App</h1>
          <input type="text" placeholder="Name" />

          <Link to ="./Edit">
            <button className="login-btn">LOGIN</button></Link>
        
        </div>
      </div>
    </>
  );
};

export default Login;
