import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);


  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{time}.</h2>
    </div>
  );
};

export default DigitalClock;
