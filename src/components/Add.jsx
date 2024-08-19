import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function Add() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    setTask("");
    
   dispatch(addTodo(task));
   console.log(task);
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter a task:"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}
