import React, {useState} from 'react'

function UseState() {

    const [state, setState] = useState(0)

  return (
    <div>
        <h1>UseState</h1>
        <p>{state}</p>
        <button onClick={()=>setState(prev => prev + 1)}>Add</button>
    </div>
  )
}

export default UseState