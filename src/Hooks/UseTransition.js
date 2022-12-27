import React, {useState, useTransition} from 'react'

function UseTransition() {

    const [input, setInput] = useState("")

    const [list, setList] = useState([])

    const [isPending, startTransition] = useTransition()

    console.log(isPending)

    const handleFunction = (e) => {
      setInput(e.target.value)
      const tempList = []
      startTransition(()=>{
        for(let i = 0; i <= 200; i++){
          tempList.push(e.target.value)
        }
        setList(tempList)
      })
    }

  return (
    <div>
        <h1>UseTransition</h1>
        <input type="text" value={input} onChange={handleFunction} />
        <ul>
          {
            list.map((val,index)=>{
              return (<li key={index}>{val}</li>)
            })
          }
        </ul>
    </div>
  )
}

export default UseTransition