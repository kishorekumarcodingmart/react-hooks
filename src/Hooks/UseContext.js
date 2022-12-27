import React, { createContext, useState } from 'react'
import Child from '../Components/Child'

export const Data = createContext()

function UseContext() {

    const [state] = useState("Kishore")

  return (
    <Data.Provider value={state}>
        <h1>UseContext</h1>
        <div>
            <Child />
        </div>
    </Data.Provider>
    
  )
}

export default UseContext