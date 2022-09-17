import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToDoLayer } from "./context/ToDoContext";
import reducer, { initialState } from "./context/reducer";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Edit from "./pages/Edit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDoLayer initialState={initialState} reducer={reducer}>
      <App />
    </ToDoLayer>
  </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
