import React from "react";
import "./Todo.css";

const Todo = ({ description }) => {
  return (
    <div className="tasks-list">
      <p className="tasks-item">{description}</p>
      <button className="remove-button">Done</button>
    </div>
  );
};

export default Todo;
// to add a new to do list we need to give it a unique id. first install
// npm i react-redux @reduxjs/toolkit uuid
