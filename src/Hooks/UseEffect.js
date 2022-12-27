import React, { useState } from 'react'
import Count from '../Components/Count'

function UseEffect() {
    const [state, setState] = useState(0)

  return (
    <div>
        <h1>UseEffect</h1>
        <Count  value={state}/>
        <button onClick={() => setState(prev => prev + 1)}>Add</button>
    </div>
  )
}

export default UseEffect