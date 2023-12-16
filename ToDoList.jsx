import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./ToDoList.css";
export default function ToDoList() {
    let [todos,setToDos] = useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = () => {
        // console.log("we have to add new task in todo");
        setToDos((prevTodos) => {
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
        });
        setNewTodo("");         //for after task is added to list input text make empty
    }

    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        // console.log("task to be deleted");
        // console.log(id);
        // let copy = todos.filter((todo) => todo.id != id);
        // console.log(copy);
        setToDos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let uppercaseAll = () => {
        // let newArr = todos.map((todo) => {
        //     return{
        //         ...todo,
        //         task: todo.task.toUpperCase()
        //     }
        // console.log(newArr);

        setToDos((todos) => (
            todos.map((todo) => {
            return{
                ...todo,
                task: todo.task.toUpperCase()
            }
        })));
    }

    let lowercaseAll = () => {
        setToDos( () => ( 
            todos.map((todo) => {
            return{
                ...todo,
                task: todo.task.toLowerCase()
            }
        })));
    }

    let lowercaseOne = (id) => {
        setToDos((todos) => (
                todos.map((todo) => {        
                    if(todo.id == id)
                    {
                        return{
                            ...todo,
                            task:todo.task.toLowerCase()
                        }
                    }
                    else
                    {
                        return todo;
                    }
                })
            )
        )
    }

    let uppercaseOne = (id) => {
        setToDos((todos) => (
            todos.map((todo) => {
                if(todo.id == id)
                {
                    return{
                        ...todo,
                        task: todo.task.toUpperCase()
                    }
                }
                else
                {
                    return todo;
                }
            })
        ))
    }

    let todoDone = (id) => {
        // console.log("done");
        setToDos((todos) => (
            todos.map((todo) => {
                if(todo.id == id)
                {
                    return{
                        ...todo,
                        isDone: true
                    }
                }
                else{
                    return todo;
                }
            })
        ))
        // console.log(done);
    }

    let doneAll = () => {
        setToDos((todos) => (
            todos.map((todo) => {
                return{
                    ...todo,
                    isDone:true
                }
            })
        ))
    }

    let undoneAll = () => {
        setToDos((todos) => (
            todos.map( (todo) => {
                    return{
                        ...todo,
                        isDone:false
                    }
                }
            )
        ))
    }

    // let styles = {border:2px solid};

    return(
        <div>
            <h2>Daily Todo List</h2>
            <div style={{border:'2px solid white',borderRadius:'8px'}}>
            <input placeholder="Enter task to add" value={newTodo} onChange={updateTodoValue} className="taskInput"></input>
            <br /><br />
            <button onClick={addNewTask}>Add task</button>
            <hr />
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id) }>Delete</button>
                            {/* &nbsp;&nbsp;&nbsp;
                            <button onClick={() => lowercaseOne(todo.id)}>Lowercase</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => uppercaseOne(todo.id)}>Uppercase</button>  */}
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => todoDone(todo.id)}>Mark As Done</button>
                            <br /><br />
                        </li>
                        
                    ))
                }
            </ul>

            {/* <br /><br />
            <button onClick={uppercaseAll}>Uppercase All</button>
            <br /><br />
            <button onClick={lowercaseAll}>Lowercase All</button> */}
            <br /><br />
            <button onClick={doneAll}>Mark All Done</button>
            <br /><br />
            {/* <button onClick={undoneAll}>Mark All UnDone</button>
            <br /><br /> */}
        </div>
        </div>
        
    );
}



