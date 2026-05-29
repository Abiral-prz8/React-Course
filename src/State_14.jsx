import { useState } from "react"

export default function State(){
    const [fruit,setFruit]=useState("apple")
    const [counter,setCounter]=useState(0)

    const handlefruit=()=>{
        setFruit("banana")
    }
    return(
        <div>
            <h1>{fruit}</h1>
            <button onClick={handlefruit}>Change fruit</button> <br />
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>

        </div>
    )
}