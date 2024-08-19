import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, markAsDone } from "../features/todo/todoSlice";
import Add from "./Add";
import { useState } from "react";
export default function Todo() {
 

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  

  return (
    <div>
            <Add/>
      <h1>todos:</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}
          <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
          
          </li>
        ))}
      </ul>
  
      
    </div>
  );
}
