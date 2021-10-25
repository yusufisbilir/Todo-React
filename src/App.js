import React from "react";

// components
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

// css files
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Yusuf's ToDo List</h1>
      </header>

      <Form />
      <TodoList />
    </div>
  );
}

export default App;
