import { useState } from "react"

export default function MultipleCondition(){
    const [counter,setCounter]=useState(0);
    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <h1>{counter}</h1>
            {
                counter ===0?<h1>condition 0</h1>
                : counter ===1?<h1>condition 1</h1>
                : counter ===2?<h1>condition 2</h1>
                : counter ===3?<h1>condition 3</h1>
                : counter ===4?<h1>condition 4</h1>
                : <h1>Other condition</h1>
            }
        </div>
    )
}