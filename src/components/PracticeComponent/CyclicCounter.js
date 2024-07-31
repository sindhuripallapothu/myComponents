import React, { useState } from "react";

const counterStyle = {
  display: "flex",
  justifyContent: "space-around",
  width: "100px",
};

const CyclicCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={counterStyle}>
      <button onClick={() => setCount(count !== 3 ? Math.min(count +1, 3) : 0)}>{count}</button>
    </div>
  );
};

export default CyclicCounter;
