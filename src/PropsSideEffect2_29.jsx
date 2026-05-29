import { useEffect } from "react";

function Counter({ counter, data }) {
    const counterFunc = () => {
        console.log("Counter", counter);
    }

    function dataFUnction() {
        console.log("Data:", data)
    }

    useEffect(() => {
        counterFunc();
    }, [])

    useEffect(() => {
        dataFUnction()
    }, [data])
    return (
        <div>
            <h1>{counter}</h1>
            <h1>{data}</h1>
        </div>
    )
}
export default Counter