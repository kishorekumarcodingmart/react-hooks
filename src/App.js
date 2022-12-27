import React from 'react'
import UseCallback from './Hooks/UseCallback'
import UseContext from './Hooks/UseContext'
import UseDebugValue from './Hooks/UseDebugValue'
import UseDeferredValue from './Hooks/UseDeferredValue'
import UseImperativeHandle from './Hooks/UseImperativeHandle'
import UseLayoutEffect from './Hooks/UseLayoutEffect'
import UseMemo from './Hooks/UseMemo'
import UseReducer from './Hooks/UseReducer/UseReducer'
import UseState from './Hooks/UseState'
import UseTransition from './Hooks/UseTransition'
import UseEffect from './Hooks/UseEffect'
          
function App() {
  return (
    <div>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
      <hr />
      <UseReducer />
      <hr />
      <UseTransition />
      <hr />
      <UseDeferredValue />
      <hr />
      <UseLayoutEffect />
      <hr />
      <UseImperativeHandle />
      <hr />
      <UseDebugValue />
      <hr />
      <UseContext />
    </div>
  )
}

export default App