import { useEffect, useState } from "react"
import LifeCycle2 from "./LifeCycle2_30"

function LifeCycle(){
    const [counter,setCounter]=useState(0)
    const [data,setData]=useState(0)
    const [display,setDisplay]=useState(true)
    
    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>Counter</button>
            <button onClick={()=>setData(data+1)}>Data</button>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {
                display?<LifeCycle2 counter={counter} data={data} />:null

            }
        </div>
    )
}
export default LifeCycle