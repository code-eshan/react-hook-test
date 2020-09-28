import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})

    const [id,setID] = useState(1)

    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios({
            url: `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`,
            method: 'GET'
        }).then((res) => {
            console.log(res);
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>

            <input type="text" value={id} onChange={e => { setID(e.target.value)}}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}

        </div>
    )
}

export default DataFetching
