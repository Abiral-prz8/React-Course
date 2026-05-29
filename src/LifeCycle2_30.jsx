
import { useEffect } from "react"
function LifeCycle2({counter,data}){
    
    useEffect(()=>{
        console.log("mounted event")
    },[]) 

    useEffect(()=>{
        console.log("updated event")
    },[{data}]) 

    useEffect(()=>{
       return ()=>{
        console.log("unmount phase only")
       }
    },[])
  

    return(
        <div>
            <h1>Counter Value:{counter}</h1>
            <h1>Data value:{data}</h1>
            

        </div>
    )
}
export default LifeCycle2