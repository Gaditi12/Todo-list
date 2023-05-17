import { ADD_TODO, DELETE_TODO } from "../action-creators/actionTypes";

const initialState = [
  {
    id: 1,
    todo: "buy fruits",
    completed: false,
  },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    default:
      return state;
  }
};
