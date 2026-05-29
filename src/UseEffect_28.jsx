import { useEffect, useState } from "react"

function UseEffect(){
    const[counter,setCounter]=useState(0)
    const[data,setData]=useState(0)

    function callOnce(){
        console.log("CallOnce function Called")
    }

    function forcounter(){
        console.log("Counter:",counter)
    }

    useEffect(()=>{
    // callOnce();
    forcounter()
    },[counter])
  
    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
            <button onClick={()=>setData(data+1)}>Data{data}</button>
        </div>
    )
}
export default UseEffect