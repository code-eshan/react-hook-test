import React, { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Called')
        window.addEventListener('mousemove',logMousePosition)

        //Empty array passed means this does not depend on any other rendering
        //events. Only run this at the initial time..
        //This acts like componentDidMount() in class components...
    }, [])


    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
