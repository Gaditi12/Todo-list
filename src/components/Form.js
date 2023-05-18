import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../state/action-creators";
const Form = ({ isEdit, edit, cancelUpdate }) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");
  useEffect(() => {
    setEditValue(edit.todo);
  }, [edit]);
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
  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: edit.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
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
        <form className="custom-form" onSubmit={editSubmit}>
          <label>Edit your todo-items </label>
          <div className="input-and-btn">
            <input
              className="form-control"
              type="text"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type="submit">UPDATE</button>
          </div>
          <button type="button" className="back-btn" onClick={cancelUpdate}>
            BACK
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
