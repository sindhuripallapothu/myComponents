import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [count, setCount] = useState(0);
    const [calc, setCalc] = useState(0);

    useEffect(() => {
        setCalc(() => count*2)
    }, [count])

    const handleClick = () => {
        setCount((c) => c + 1)
    }
    return(
        <>
        {count}
        <button onClick={handleClick}>+</button>
        {calc}
        </>
    )
}

export default Hooks;