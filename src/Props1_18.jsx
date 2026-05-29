import { useState } from "react";
import Props2 from "./Props2_18 ";
import Props3 from "./Props3_18 ";

export default function Props(){
    let userObject={
        Sname:"Shyam",
        age:"18",
        address:"Kathmandu"
    }
    const [student,setStudent]=useState()
    return(
        <div>
            <Props2 name="Ram" email="Ram123@gmail.com" user={userObject}/>
            <button onClick={()=>setStudent("Shyam")}>Click for Studentname</button>
            {
                student && <Props3 student={student}/>
            }
        </div>
    )
}