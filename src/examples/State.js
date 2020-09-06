import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0)

    const more = () => {
        setCount(currentCount => currentCount + 1)
    }

    const less = () => {
        setCount(currentCount => currentCount - 1)
    }

    return (
        <>
            <h1 >Count: {count}</h1>
            <button onClick={more}>more</button>
            <button onClick={less}>less</button>
        </>
    )
}

export default State
