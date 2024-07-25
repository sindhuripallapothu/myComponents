import React, { useState, useEffect } from 'react';

const OpendoorNew = () => {
  const [timers, setTimers] = useState([]);
  const [showCreateTimer, setShowCreateTimer] = useState(false);

  const addTimer = (title) => {
    setTimers([...timers, { id: Date.now(), title, time: 0, isRunning: false }]);
    setShowCreateTimer(false);
  };

  const deleteTimer = (id) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  return (
    <div>
      <h1>Timer App</h1>
      <button onClick={() => setShowCreateTimer(true)}>+</button>
      {showCreateTimer && <CreateTimer addTimer={addTimer} />}
      <TimerList timers={timers} deleteTimer={deleteTimer} />
    </div>
  );
};

const TimerList = ({ timers, deleteTimer }) => {
  return (
    <div>
      {timers.map((timer) => (
        <Timer key={timer.id} timer={timer} deleteTimer={deleteTimer} />
      ))}
    </div>
  );
};

const Timer = ({ timer, deleteTimer }) => {
  const [time, setTime] = useState(timer.time);
  const [isRunning, setIsRunning] = useState(timer.isRunning);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>{timer.title}</h2>
      <p>{formatTime(time)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={() => deleteTimer(timer.id)}>Delete</button>
    </div>
  );
};

const CreateTimer = ({ addTimer }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTimer(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Timer Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default OpendoorNew;
