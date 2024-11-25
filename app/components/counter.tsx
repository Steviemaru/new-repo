import { useState } from "react"

function counter() {
    const [counter, setCounter] = useState(0)
  return (
    <div className="bg-slate-500 p-10 " onClick={()=> {setCounter(counter + 1)}}>{counter}</div>
  )
}

export default counter