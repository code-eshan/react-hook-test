import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function DataFetchingOne() {

    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [post, setpost] = useState({})

    useEffect(() => {

        Axios({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET'
        }).then((res) => {
            setloading(false)
            setpost(res.data)
            seterror('')
        }).catch((err) => {
            setloading(false)
            setpost({})
            seterror('Something went wrong')
        })

    }, [])

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
