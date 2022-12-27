import React, { useRef, useState } from 'react'
import Input from '../Components/Input'

function UseImperativeHandle() {

    const [value, setValue] = useState("")

    const inputRef = useRef()

  return (
    <div>
        <h1>UseImperativeHandle</h1>
        <Input ref={inputRef} value={value} onChange={e => setValue(e.target.value)}/>
        
        <button onClick={() => console.log(inputRef.current)}>Focus</button>
    </div>
  )
}

export default UseImperativeHandle