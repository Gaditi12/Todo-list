import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import { Todos } from "./components/Todos";
//import TodoList from "./components/TodoList";
const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEditTodo] = useState("");
  const handleEditClick = () => {
    setIsEdit(true);
    setEditTodo();
  };
  return (
    <>
      <div className="container">
        <br></br>
        <h1 className="text-center">Todo-List App</h1>
        <Form isEdit={isEdit} />
        <Todos handleEditClick={handleEditClick} isEdit={isEdit} />
      </div>
      {/* <TodoList /> */}
    </>
  );
};

export default App;
