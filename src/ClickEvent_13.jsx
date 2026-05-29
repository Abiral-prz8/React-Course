export default function Click() {
  function callFun() {
    alert("Function called");
  }

//   Arrow function
const fruit=()=>{
    alert("Apple");
}
const fruits=(name)=>{
    alert(name);
}

  return (
    <div>
      <button onClick={callFun}>Click Me</button>
      <button onClick={()=>fruit()}>Click Me</button>
      <button onClick={()=>fruits("Mango")}>Mango</button>
      <button onClick={()=>fruits("Banana")}>Banana</button>
    </div>
  );
}