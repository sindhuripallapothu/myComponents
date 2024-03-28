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

const ArraysComp = (props) => {
  const { inputArr } = props;
  return (
    <>
      {inputArr.map((i) => (
        <div>{i}</div>
      ))}
    </>
  );
};
const Ramp = (props) => {
  const { input } = props;
  const renderIfUndefined = input === undefined;
  const renderIfArray = Array.isArray(input);
  return (
    <>
      <div>{renderIfUndefined && <DigitalClock />}</div>
      <div>{renderIfArray && <ArraysComp inputArr={input} />}</div>
      <div>{!renderIfUndefined && !renderIfArray && <div>{input}</div>}</div>
    </>
  );
};

export default Ramp;
