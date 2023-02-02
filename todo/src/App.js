import Form1 from "./components/Form1";
import Header1 from "./components/Header1";
import React, { useState } from 'react';
import Todo1 from "./components/Todo1";
import TodoList1 from "./components/TodoList1"
import Header3 from "./components/Header3";
import Form3 from "./components/Form3";
import Todo3 from "./components/Todo3";
import TodoList3 from "./components/TodoList3";
import Header2 from "./components/Header2";
import Form2 from "./components/Form2";
import TodoList2 from "./components/TodoList2";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Header4 from "./components/Header4";
import Form4 from "./components/Form4";
import Todo4 from "./components/Todo4";
import TodoList4 from "./components/TodoList4";


function App() {

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  return (
    <div>
      <Header3></Header3>
      <Form3 todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form3>
      <TodoList3 todoList={todoList} setTodoList={setTodoList}></TodoList3>
    </div>
  );
}

export default App;
