import React from 'react';
import '../App.css';

function AddTodo ({addTodo}){
const [value,setValue] = React.useState("");
const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
}
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      className="todo"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </form>

  )

}

export default AddTodo;