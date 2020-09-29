import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

    const [timer, settimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            settimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(interval)}>Clear Hook Timer</button>
        </div>
    )
}

export default HookTimer
