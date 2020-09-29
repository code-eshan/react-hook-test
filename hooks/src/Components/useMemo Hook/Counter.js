import React, { useState, useMemo } from 'react'

function Counter() {

    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const incrementOne = () => {
        setcounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setcounterTwo(counterTwo + 1)
    }

    //useMemo function is used here to mainly optimize the performance by not re-rendering certain elements which does not need a re-render
    //useMemo function has two parameters in which the first one is the main function, and the second is a dependency on which that function is focused on.
    //Therefore, when the stated dependency changes only the function calls. Else not. THIS SOLVES THE BELOW PROBLEM !

    //React uses cached value for the other renders.
    const isEven = useMemo(() => {
        let i = 0
        while (i<2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    //Without a useMemo, by having a simple isEven() function, when we increment the counterOne by clicking the button,
    //the isEven is called and it takes some time to process. But, if counter two button is clicked, eventhough it does not have any
    //connection with the isEven function as it deals with only counterOne, the whole component is re-rendered and the same time lag
    //which is taken for the counterOne is taken here as well. Therefore useMemo function is used to deal with this situation. 
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'} </span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
