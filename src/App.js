import React from "react";
import Form from "./components/Form";
import { Todos } from "./components/Todos";
//import TodoList from "./components/TodoList";
const App = () => {
  return (
    <>
      <div className="container">
        <br></br>
        <h1 className="text-center">Todo-List App</h1>
        <Form />
        <Todos />
      </div>
      {/* <TodoList /> */}
    </>
  );
};

export default App;
