// >Uncontrolled component with query selector
// >Uncontrolled component with useRef
// get input field value without state 
// get input field with DOM object

import { useRef } from "react";

function UserForm() {
    const userRef = useRef();
    const passwordRef = useRef();

    const handleform = (event) => {
        event.preventDefault();
        const user = document.querySelector("#user").value;
        const password = document.querySelector("#password").value;
        console.log(user, password);
    }

    const handleformRef = () => {
        event.preventDefault();
        const user = userRef.current.value
        const password = passwordRef.current.value
        console.log("handleformRef", user, password);

    }
    return (
        <div>
            <h1>Uncontrolled Component </h1>

            <form action="" method="post" onSubmit={handleform}>
                <input type="text" id="user" placeholder="Enter user name" />
                <br /><br />
                <input type="password" id="password" placeholder="Enter user password" />
                <br /><br />

                <button>Submit</button>
            </form>
            <hr />

            <h1>Uncontrolled Component with useRef</h1>
            <form action="" method="post" onSubmit={handleformRef}>
                <input type="text" ref={userRef} placeholder="Enter user name" />
                <br /><br />
                <input type="password" ref={passwordRef} placeholder="Enter user password" />
                <br /><br />

                <button>Submit with Ref</button>
            </form>
        </div>
    )
}
export default UserForm