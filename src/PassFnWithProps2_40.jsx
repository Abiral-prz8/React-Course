function Passfn2({displayfn,name,getUser}){
    return(
        <div>
            <button onClick={()=>displayfn(name)}>Display function</button>
            <button onClick={()=>getUser()}>getUser function</button>
        </div>
    )
}
export default Passfn2