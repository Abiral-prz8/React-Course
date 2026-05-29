import { useState,useEffect} from "react"

function Clock2({color}){
    const [time,setTime]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return (
        <div>
            <h1
            style={{
                color:color,
                backgroundColor:"black",
                width:"300px",
                padding:"20px",
                borderRadius:"10px",
            }}
            >
                {time}
            </h1>

        </div>
    )
}
export default Clock2