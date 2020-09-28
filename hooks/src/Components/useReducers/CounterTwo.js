import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First Conter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>INCREMENT 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>DECREMENT 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>RESET</button>
            <div>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>INCREMENT COUNTER 2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>DECREMENT COUNTER 2</button>
            </div>
        </div>
    )
}

export default CounterTwo
