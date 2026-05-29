export default function JavascriptInJSX() {
    let x = 2, y = 3;
    const name = "Ram";
    const age = "";
    const path = "change-location.webp";
    function fruit() {
        return "apple";
    }

    function operation(a, b, op) {
        if (op == "+") {
            return a + b;
        }
        else if (op == "-") {
            return a - b;
        }
        else {
            return a * b;
        }
    }

    const userObj = {
        name: "Shyam",
        email: "Shyam@test.com",
        age: 29,
    };

    const useArray=["Ram","Shyam","Peter"]
    return (
        <div>
            {/* using variable inside JSX */}
            <h1>JSX with curly braces</h1>
            <h1>{name}</h1>
            <h1>{x + y}</h1>

            {/* conditional rendering in JSX */}
            <h1>{age ? age : "No age"}</h1>

            {/* Using function inside JSX */}
            <h1>{fruit()}</h1>

            {/* Performing Operation in JSX */}
            <h1>{operation(10, 2, "+")}</h1>
            <h1>{operation(10, 2, "-")}</h1>
            <h1>{operation(10, 2, "")}</h1>

            {/* Working with object and array With JSX */}
            <h1>{userObj.name}</h1>
            <h1>{userObj.email}</h1>
            <h1>{userObj.age}</h1> 

            {/* Array */}
            <h1>{useArray[2]}</h1> 

            {/* HTML tag Attribute with JSX */}
            <input type="text" value={name} id={name}/> <br /><br />
            <img src={path} alt="photo" />

        </div>
    )
} 