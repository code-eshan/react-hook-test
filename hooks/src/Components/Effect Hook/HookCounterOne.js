import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //This is an alternate to componentDidMount() and componentDidUpdate()
    //useEffect runs after every render of the component
    useEffect(() => {
        //We can use backticks to define a string in which if it contains a
        //javascript function
        console.log('useEffect Called...')
        document.title = `You clicked ${count} times`

        //As the second parameter, in an array, we can state what change we need
        //to watch for instead of calling useEffect whenever the changes are maded all
        //the time
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => {setName(e.target.value)}}/>
            <button onClick={() => { setCount(count + 1) }}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
