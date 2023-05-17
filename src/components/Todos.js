import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { deleteTodo } from "../state/action-creators";
export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  console.log(todos);
  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        <input
          type="checkbox"
          checked={todo.completed}
          // onChange={() => dispatch(handleCheckbox(todo.id))}
        />
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box">
        <span>
          <Icon icon={edit2} />
        </span>
        <span onClick={() => dispatch(deleteTodo(todo.id))}>
          <Icon icon={trash} />
        </span>
      </div>
    </div>
  ));
};
