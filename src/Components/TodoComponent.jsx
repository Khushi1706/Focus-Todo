import React from 'react';
import "../App.css";
import Button from '@material-ui/core/Button';
import AddTodo from './AddTodoComponent'

function Todo({todo,next,setShowNewTodo}){
    const handleAdd = e =>{
        e.preventDefault();
        setShowNewTodo(true);
    }
    return(
        <div className="todo">
        <div className="todo-text">
            {todo.text}
        </div>
        <div className ="todo-timer">
            HH : MM : SS
        </div>
        <div className="todo-button">
                <Button variant="contained" color="primary">
                    Start
                </Button>
        </div>
        <div className="todo-button">
        <Button variant="contained" color="primary">
                    Stop
                </Button>
        </div>
        <div className="todo-button">
        <Button variant="contained" color="primary">
                    Pause
                </Button>
        </div>
        <div className="todo-button">
        <Button variant="contained" color="primary">
                    Resume
                </Button>
        </div>
        <div className="todo-button">
        <Button variant="contained" color="primary">
                    Reset
                </Button>
        </div>
            <div className={`${next ? "todo-button" : "disappear"}`}>
            <Button variant="contained" color="primary" onClick={handleAdd}>
                        Add new task
            </Button>
            </div>
    
        </div>

    );
}

export default Todo;