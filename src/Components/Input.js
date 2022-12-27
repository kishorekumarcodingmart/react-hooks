import React, {forwardRef, useImperativeHandle} from 'react'

function Input({value,onChange},ref) {
    
    useImperativeHandle(ref, ()=>{
        return {name : "Kishore"}
    },[])

  return (
    <input 
      type="text"
      value = {value}
      onChange = {onChange}
    />
  )
}

export default forwardRef(Input)