import {useState, useDebugValue, useEffect} from 'react'

export function CustomeHook() {
    const [user, setUser] = useState()

    useEffect(()=>{
        setUser("Kishore Kumar")
    },[])
  
    useDebugValue("kishore")
  
    return [user]
  }