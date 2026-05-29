import { useRef } from "react"

// >Leaern how to use useRef
// >Control input field with useRef
// >Hide and Show input field

function InputField(){
    const inputRef=useRef(null);
    const h1Ref=useRef(null);
    const inputhandler=()=>{
        console.log(inputRef);
        inputRef.current.focus()
        inputRef.current.style.color='red'
        inputRef.current.placeholder='Enter password'
        inputRef.current.value='123'
    }
    const toggleHandler=()=>{
                if(inputRef.current.style.display!='none'){
                    inputRef.current.style.display='none'
                }else{
                    inputRef.current.style.display='inline'
                }
    }
    const h1handler=()=>{
        h1Ref.current.style.color='green'
    }
    return(
        <div>
            <button onClick={()=>toggleHandler()}>Toggle</button>
            <input ref={inputRef} type="text" placeholder="Enter username" />
            <button onClick={()=>inputhandler()}>Focus on input</button>

            <h1 ref={h1Ref}>Hello World</h1>
            <button onClick={()=>h1handler()}>handler</button>
        </div>
    )
}
export default InputField