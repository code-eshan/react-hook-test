import React, { useState } from 'react'

function HookCounter3() {

    //Name is an object in this case.. which has firstname and lastname attributes.
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />

                <h2>Your firstname is - {name.firstName}</h2>
                <h2>Your lastname is - {name.lastName}</h2>
            </form>

            {/* Here when we type the firstName, the lastName attribute is removed..
            That is why we see only one value updates and the other is null. */}

            {/* The spread operator ...name as the first parameter in the setName function,
            says that before changing the value of first / last name, the previous
            name object values should be copied. This solves the above problem. */}
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounter3
