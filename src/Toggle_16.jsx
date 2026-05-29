import { useState } from "react"

export default function Toggle(){
    const [display,setDisplay]= useState(true)
    return(
        <div>
        <button onClick={()=>setDisplay(!display)}>toggle</button>
        {
            display? <h1>Ram</h1> : null
        }
        </div>
    )
}