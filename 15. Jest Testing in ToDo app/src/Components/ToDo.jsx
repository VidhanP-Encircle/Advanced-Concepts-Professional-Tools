import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/slices/todoSlice";

const ToDo = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const allTask = useSelector((state) => state.todo.tasks);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="max-w-100 mt-2 m-auto p-5 border border-black rounded-[10px] text-center">
      <h1>To Do App</h1>

      <div className="m-3">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border rounded-lg p-1"
        />
      </div>

      <button onClick={handleAddTask} className="border rounded-lg p-1">
        Add Task
      </button>

      <ul>
        {allTask.map((task, idx) => (
          <li key={idx} className="m-3">
            {task}

            <button
              onClick={() => dispatch(deleteTask(idx))}
              className="ml-3 border rounded-lg p-1 border-red-500 text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
