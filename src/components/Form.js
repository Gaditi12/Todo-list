import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/action-creators";
const Form = ({ isEdit }) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };
  return (
    <>
      {isEdit === false ? (
        <form className="custom-form" onSubmit={handleSubmit}>
          <label>Add your todo-items</label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button type="submit">ADD</button>
          </div>
        </form>
      ) : (
        <form className="custom-form">
          <label>Edit your todo-items </label>
          <div className="input-and-btn">
            <input className="form-control" type="text" required />
            <button type="submit">UPDATE</button>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
