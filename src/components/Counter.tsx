import { useState } from "react";
import * as styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      {count}
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
};
