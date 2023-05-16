import React from "react";

const Todo = () => {
  return (
    <>
      <div className="container">
        <h2>ToDo List</h2>
        <br />
        <p className="todos">
          <input type="text" placeholder="add new task..." />

          <i className="fa fa-plus"></i>
        </p>
      </div>
    </>
  );
};

export default Todo;
