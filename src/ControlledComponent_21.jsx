import { useState } from "react"

export default function Form(){
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    return(
        <div>
            <form action="post">
                <input type="text" onChange={(event)=>setName(event.target.value)} value={name} placeholder="Enter your name"/> <br />

                <input type="email" onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="Enter your email"/> <br />
                <input type="password" onChange={(event)=>setPassword(event.target.value)} value={password} placeholder="Enter your password"/> <br />
                <button>Submit</button>
                <button onClick={()=>{setName("");setEmail("");setPassword("")}}>Clear</button>
            </form>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{password}</h1>
        </div>
    )
}