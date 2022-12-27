import React, { useState } from 'react'

function CaseToUseReducer () {

        const [loading, setLoading] = useState(false)
        const [data, setData] = useState({})
        const [error, setError] = useState(false)

        const handleFetch = () => {
            setLoading(true)
            setError(false)
            fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setData(data)
                setLoading(false)
            })
            .catch(()=>{
                setError(true)
                setLoading(false)
            })
        }

  return (
    <div>
        <button onClick={handleFetch}>
            {loading?"Loading...":"Fetch a Post"}
        </button>
        <p>{data?.title}</p>
        <span className='error'>{error && "Something went Wrong"}</span>
    </div>
  )
}

export default CaseToUseReducer 