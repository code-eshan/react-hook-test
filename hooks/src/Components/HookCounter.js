import React, {useState} from 'react'

function HookCounter() {

    //useState accepts initial value of the state variable zero.
    //returns a pair of values. name = count , method = setCount 
    const [count, setCount] = useState(0)
    
    return (
        <div>
            {/* Here before we used this.state.count and now we have omitted the this
            keyword. It is much more readable and less complex compared to before..
            The setCount method can be directly assigned in onClick Function. */}
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
