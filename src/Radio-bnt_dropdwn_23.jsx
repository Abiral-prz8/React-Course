import { useState } from "react"

function Radio() {
    const [gender, setGender] = useState("male")
    const [district, setDistrict] = useState("Kathmandu")
    return (
        <div>
            <h1>Select Gender</h1>
            <input type="radio" name="Gender" value={"male"} id="male" onChange={(event) => setGender(event.target.value)} checked={gender == 'male'} />
            <label htmlFor="male">Male</label>

            <input type="radio" name="Gender" value={"female"} id="female" onChange={(event) => setGender(event.target.value)} checked={gender == 'female'} />
            <label htmlFor="female">Female</label>
            <h1>Selected Gender: {gender}</h1>
            <br /><br /><hr />

            <h1>Select District</h1>
            <select onChange={(event) => setDistrict(event.target.value)} defaultValue={"Kathmandu"}>
                <option value="Bhaktapur">Bhaktapur</option>
                <option value="Lalitpur">Lalitpur</option>
                <option value="Kathmandu">Kathmandu</option>
            </select>
            <h1>selected District: {district}</h1>
        </div>
    )
}
export default Radio