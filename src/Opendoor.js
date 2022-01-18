// Timers Project
// Please implement a list of timers using React from the comps shown below.
// Timer Page (fig 1): https://i.imgur.com/8xwKYSy.png
// Timer Form (fig 2): https://i.imgur.com/UxamYuY.png
// Core features:
// - Clicking the + button should replace the button with the create timer component (fig 1).
//   After entering a title and clicking Create, a new timer should be appended to the list.
// - Timers should count up in seconds when they’re started and not count when stopped.
//   Each counter should display the time elapsed in hours, minutes, and seconds.
// - Clicking the delete button should remove an individual timer from the list.

import React from "react";

const NewTimer = (props) => {
  const { list, setList, setComp } = props;
  const [title, setTitle] = React.useState("");
  const handleCreate = () => {
    console.log([...list, title]);
    setList([...list, title]);
    setTitle("");
  };
  const handleCancel = () => {
    setComp(false);
  };
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

const Timer = (props) => {
  const { list } = props;
  const [time, setTime] = React.useState(0);
  // React.useEffect(() => {
  //   setInterval(() => setTime(time + 1), 1000);
  // }, [time]);
  const handleStart = () => {
    setInterval(() => setTime(time + 1), 1000);
  };
  const handleStop = () => {
    clearInterval(handleStart);
  };
  console.log(list);
  return (
    <div>
      List of Timers
      {list.map((item) => (
        <div>
          <div>{item}</div>
          {time}
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      ))}
    </div>
  );
};

const OpenDoorApp = () => {
  const [comp, setComp] = React.useState(false);
  const [list, setList] = React.useState([]);
  const handleClick = () => {
    setComp(true);
  };
  return (
    <div>
      <Timer list={list} />
      <button onClick={handleClick}>+</button>
      {comp && <NewTimer list={list} setList={setList} setComp={setComp} />}
    </div>
  );
};

export default OpenDoorApp;
