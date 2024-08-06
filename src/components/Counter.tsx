import { useState } from "react";
import "../App.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      {count}
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
};
