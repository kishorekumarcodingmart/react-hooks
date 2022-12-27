import React, { useMemo, useState } from 'react'

function UseMemo() {

    const [count, setCount] = useState(0)

    const [arr, setArr] = useState([1,2,3,4,5])

    const memoValu = useMemo(()=>{
        console.log("Changing the Max Value")
        return Math.max(...arr)
    },[arr])


  return (
    <div>
        <h1>useMemo</h1>
        <h4>Count : {count}</h4>
        <button onClick={()=>setCount(prev => prev + 1)}>Increment the Count</button>
        <button onClick={()=>setArr([...arr,count])}>Change the Array</button>
        <h1>Array Maximum Value : {memoValu}</h1>
        <p>Array : {JSON.stringify(arr)}</p>
    </div>
  )
}

export default UseMemo

/* 

This useMemo can be used only with pure Function 
If Depended Array Value Change the useMemo Function called
useMemo Hook returns a memoized value
*/