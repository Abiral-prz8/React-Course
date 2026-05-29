import { useState } from "react"

export default function Input(){
    const [val,setVal]=useState();
    return(
        <div>
            <form>
                <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter user name" />
            </form>
            <button onClick={()=>setVal("")}>Clear</button>
            <h1>{val}</h1>
        </div>
    )
}