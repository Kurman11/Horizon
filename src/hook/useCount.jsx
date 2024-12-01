import { useState, useEffect, useRef } from "react";

function useCountUp(end, start = 0, duration = 2000) {
  const [count, setCount] = useState(start);
  const currentNumRef = useRef(start);

  useEffect(() => {
    currentNumRef.current = start;
    setCount(start);

    const delay = duration / (end - start);
    const countUp = setInterval(() => {
      if (currentNumRef.current < end) {
        currentNumRef.current++;
        setCount(currentNumRef.current);
      } else {
        clearInterval(countUp);
      }
    }, delay);

    return () => clearInterval(countUp);
  }, [end, start, duration]);

  return count.toFixed(0);
}

export default useCountUp;
