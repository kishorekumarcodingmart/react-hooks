import React, {useEffect} from 'react'

function Count({value}) {
    useEffect(()=>{
        console.log("Mount")
    },[])

    useEffect(()=>{
        console.log("Update");
    },[value])   
    
    useEffect(()=>{
        return () => {
                console.log("Unmount")
            }
        
    },[])
  return (
    <div>{value}</div>
  )
}

export default Count