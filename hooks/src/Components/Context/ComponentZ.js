import React,{useContext} from 'react'
//Step 1 : Import contexts
import {UserContext, ChannelContext} from '../../App'

function ComponentZ() {

    //Step 2 : Using useContext() method and the imported contexts
    //are passed as parameters...
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentZ
