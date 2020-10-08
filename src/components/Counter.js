import React, { useState } from "react";

const counterStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100px'
}

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={counterStyle}>
      <button onClick={() => setCount(Math.max(count - 1, 0))}>-</button>
      {count}
      <button onClick={() => setCount(Math.min(count + 1, 10))}>+</button>
    </div>
  );
};

export default Counter;
