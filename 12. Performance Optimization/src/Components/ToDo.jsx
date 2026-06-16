import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/slices/todoSlice";
import TodoItem from "./TodoItem";

const ToDo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  const handleAddTask = () => {
    if (!task.trim()) return;

    dispatch(
      addTask({
        id: Date.now(),
        text: task,
      }),
    );
    setTask("");
  };

  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, []);

  const totalTasks = useMemo(() => {
    console.log("Calculating total tasks");
    return tasks.length;
  }, [tasks]);

  return (
    <div className="max-w-100 mt-2 m-auto p-5 border border-black rounded-lg text-center">
      <h1 className="text-2xl font-bold">Todo App</h1>

      <h3 className="mt-2">Total Tasks: {totalTasks}</h3>

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
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
