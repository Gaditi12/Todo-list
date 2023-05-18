import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import { Todos } from "./components/Todos";
//import TodoList from "./components/TodoList";
const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEditTodo] = useState("");
  const handleEditClick = (todo) => {
    setIsEdit(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setIsEdit(false);
  };
  return (
    <>
      <div className="container">
        <br></br>
        <h1 className="text-center">Todo-List App</h1>
        <Form isEdit={isEdit} edit={edit} cancelUpdate={cancelUpdate} />
        <Todos handleEditClick={handleEditClick} isEdit={isEdit} />
      </div>
      {/* <TodoList /> */}
    </>
  );
};

export default App;
