import React, { useState, useRef, useEffect } from 'react';

const StopwatchNew = ({ name }) => {
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalID = useRef(null);

    const handleStart = (e) => {
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalID.current)
        intervalID.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    const handleStop = () => {
        clearInterval(intervalID.current)
    }
    
    let timePassed = 0
    if(startTime != null && now != null) {
        timePassed = ((now-startTime)/1000).toFixed(3)
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>Time passed : {timePassed}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default StopwatchNew