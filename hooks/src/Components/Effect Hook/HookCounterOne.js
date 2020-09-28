import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)

    //This is an alternate to componentDidMount() and componentDidUpdate()
    //useEffect runs after every render of the component
    useEffect(() => {
        //We can use backticks to define a string in which if it contains a
        //javascript function
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
