import Passfn2 from "./PassFnWithProps2_40"

function Passfn1(){
    
    const displayfn=(name)=>{
        alert(name);
    }

    const getUser=()=>{
        alert("getUser Function called")
    }
    return(
        <div>
            <h1>Call Parent componet fn from child component</h1>
            <Passfn2 displayfn={displayfn} name="Shyam" getUser={getUser}/>
            {/* <Passfn2 displayfn={displayfn} name="Ram" getUser={getUser}/>
            <Passfn2 displayfn={displayfn} name="Hari" getUser={getUser}/>
            <Passfn2 displayfn={displayfn} name="Sita" getUser={getUser}/> */}
            <Passfn2  name="Ram" />
            <Passfn2  name="Hari" />
            <Passfn2  name="Sita" />

        </div>
    )
}
export default Passfn1