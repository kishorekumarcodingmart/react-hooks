import React, { useReducer } from 'react'
import {INITIAL_STATE, reducerFunction} from './ReuducerFunction'

function UseReducer() {

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const handleFetch = () => {
        dispatch({type : "FETCH_START"})
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                dispatch({type : "FETCH_SUCCESS", payload : data})  
            })
            .catch(()=>{
                dispatch({type : "FETCH_ERROR"})
            })
        }
  return (
    <div>
        <h1>UseReducer</h1>
        <button onClick={handleFetch}>
            {state.loading?"Loading...":"Fetch a Post"}
        </button>
        <p>{state.data?.title}</p>
        <span className='error'>{state.error && "Something went Wrong"}</span>
    </div>
  )
}

export default UseReducer