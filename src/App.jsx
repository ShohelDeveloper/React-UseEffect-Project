import { useEffect, useState } from "react";
let timeInterval = null;
function App() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [timeCount, setTimeCount] = useState(5);
  // console.log(lock);

  useEffect(() => {
    if (count === 5) {
      setLock(true);
    }
  
  }, [count]);

  // Another USeEffect Example

  useEffect(() => {
    if (lock && timeInterval === null) {
      timeInterval = setInterval(() => {
        setTimeCount((prev) => prev-1);
      }, 1000);
    }
  }, [lock]);

  useEffect(() => {
    if (timeCount === 0) {
      clearInterval(timeInterval);
      setCount(0);
      setLock(false);
    }
  }, [timeCount]);

  // console.log("count =>", count, "lock =>", lock);
  return (
    <div>
      <h1>{count}</h1>
      <button disabled={lock} onClick={() => setCount(count + 1)}>
        Add {lock && `(locked - ${timeCount}s)`}
      </button>
    </div>
  );
}

export default App;
