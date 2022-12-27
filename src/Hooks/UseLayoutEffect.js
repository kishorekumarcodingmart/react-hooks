import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.value = "React"
    },[])

    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    },[])

  return (
    <div>
        <h1>UseLayoutEffect</h1>
        <input type="text" defaultValue="KISHORE" ref={inputRef} />
    </div>
  )
}

export default UseLayoutEffect