import React, { useContext } from 'react'
import {Data} from '../Hooks/UseContext'

function Child() {

    let data = useContext(Data)

  return (
    <div>
        <h1>Child</h1>
        <p>{data}</p>
    </div>
  )
}

export default Child