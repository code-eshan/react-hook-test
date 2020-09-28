import React, {useState} from 'react'

function HookCounter2() {

    const initialCount = 0;
    const [count,setCount] = useState(initialCount)

    const incrementFive = () => {

        for(let i=0;i<5;i++) {
            //This updates the count based on its previous count value
            setCount(prevCount => prevCount + 1)
        }

    }


    return (
        <div>
            Count : {count}
            <button onClick={() => { setCount(initialCount)}}>RESET</button>
            <button onClick={() => { setCount(prevCount => prevCount + 1)}}>INCREMENT</button>
            <button onClick={() => { setCount(prevCount => prevCount - 1)}}>DECREMENT</button>
            <button onClick={incrementFive}>INCREMENT 5</button>
        </div>
    )
}

export default HookCounter2
