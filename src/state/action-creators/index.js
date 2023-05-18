import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  MARK_COMPLETED,
} from "./actionTypes";

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

export const handleEditSubmit = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};

export const handleCheckbox = (payload) => {
  return {
    type: MARK_COMPLETED,
    payload,
  };
};
