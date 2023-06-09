import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const editTodo = () => {
  return {
    type: EDIT_TODO,
  };
};
