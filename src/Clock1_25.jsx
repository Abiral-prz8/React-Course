import { useState } from "react"
import Clock2 from "./Clock2_25"

function Clock(){
    const [color,setColor]=useState("green")
    return(
        <div>
            
            <select onChange={(event)=>setColor(event.target.value)}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
            </select>
            <Clock2 color={color} />

        </div>
    )
}
export default Clock