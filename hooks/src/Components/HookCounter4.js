import React, {useState} from 'react'

function HookCounter4() {

    const [items, setItems] = useState([])

    const addItem = () => {

        //Whenever addItem is called, first a copy of existing array is made with
        // ... items spread operator. To the copied item, we append another object
        //into it.
        setItems([...items, {
            id : items.length,
            value : Math.floor(Math.random() * 10) + 1
        }])
    }


    return (
        <div>
            <button onClick={addItem}>Add A Number</button>
            <ul>
                {
                    items.map(item => (
                    <li key={item.id}>{item.value}</li>
                    ))}
            </ul>
        </div>
    )
}

export default HookCounter4
