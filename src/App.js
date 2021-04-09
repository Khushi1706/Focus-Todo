import './App.css';
import React from 'react';
import Todo from './Components/TodoComponent'
import AddTodo from './Components/AddTodoComponent'

function App() {
  const [todos,setTodos] = React.useState([
    {text : "Learn react"},
    {text : "Read a book"},
    {text : "Do one problem in leetcode"}
  ])
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const [showNewTodo , setShowNewTodo] = React.useState(false);
  return (
    <div className="app">
     <h1>Start adding your tasks !</h1>
     <div className="todo-list">
     {todos.map((todo,index)=>
     index === todos.length-1?
     (
       <Todo 
        key = {index}
        index = {index}
        todo = {todo}
        next = "true"
        setShowNewTodo = {setShowNewTodo}
        ></Todo>
     )
     :    
     <Todo 
        key = {index}
        index = {index}
        todo = {todo}
        ></Todo>
     )
}
{ showNewTodo && <AddTodo addTodo={addTodo}></AddTodo> }
</div>
    </div>
  );
}

export default App;
