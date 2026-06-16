import React from "react";
import { useCounter } from "../hook/useCounter";

const Counter2 = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <h1 className="font-bold">Second Counter</h1>
      <div className="p-2">
        Current Count: {count}
        <div className="p-2">
          Increment by (1):{" "}
          <button onClick={increment} className="border rounded-lg p-1">
            Increment
          </button>
        </div>
        <div className="p-2">
          Decrement by (1):{" "}
          <button onClick={decrement} className="border rounded-lg p-1">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter2;
