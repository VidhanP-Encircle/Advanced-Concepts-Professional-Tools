import React from "react";

const ToDoItem = ({ task, onDelete }) => {
  console.log("Element rendered: ", task.text);
  return (
    <li className="m-3">
      {task.text}
      <button
        onClick={() => onDelete(task.id)}
        className="ml-3 border rounded-lg p-1 border-red-500 text-red-500"
      >
        Delete
      </button>
    </li>
  );
};

export default React.memo(ToDoItem);
