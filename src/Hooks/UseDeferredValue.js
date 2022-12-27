import React, {useState, useDeferredValue, useMemo} from 'react'

function UseDeferredValue() {

    const [input, setInput] = useState("")

    const deferVal = useDeferredValue(input)

    const list = useMemo(()=>{
        let templist = []
        for(let i = 0; i <= 20000; i++){
            templist.push(deferVal)
        }
      return templist
    },[deferVal])
    

    const handleFunction = (e) => {
        setInput(e.target.value)
      }
    
  return (
    <div>
        <h1>UseDeferredValue</h1>
        <input type="text" value={input} onChange={handleFunction} />
        <ul>
          {
            list.map((val,index)=>{
              return (val!==""?<li key={index}>{val}</li>:null)
            })
          }
        </ul>
    </div>
  )
}

export default UseDeferredValue