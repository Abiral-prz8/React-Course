import { useState } from "react"

function Checkbox_22_() {
    const [skills, setskills] = useState([])
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked)
        if (event.target.checked) {
            setskills([...skills, event.target.value])
        } else {
            setskills([...skills.filter((item) => item != event.target.value)])
        }
    }

    return (
        <div>
            <form action="">
                <input onChange={handleSkills} type="checkbox" id="php" value="php" />
                <label htmlFor="php">PHP</label>
                <br /><br />
                <input onChange={handleSkills} type="checkbox" id="react" value="react" />
                <label htmlFor="react">React</label>
                <br /><br />
                <input onChange={handleSkills} type="checkbox" id="node" value="node" />
                <label htmlFor="node">NODE</label>
                <br /><br />
            </form>
            <h1>{skills.toString()}</h1>
        </div>
    )
}
export default Checkbox_22_