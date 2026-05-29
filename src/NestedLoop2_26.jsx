function College({college}){
    return(
        <div
        style={{
            backgroundColor:"#ccc",
            margin:"20px",
            padding:"30px",
            borderBottom:"2px solid #000",
            borderRadius: "10px"

        }}>
             <h1>Name:{college.name}</h1>
                        <ul>
                            <li><h3>city:{college.city}</h3></li>
                            <li><h3>website:{college.website}</h3></li>
                            <li><h3>Student name:</h3>
                        
                                {/* you can make another component for the student */}
                                {
                                    college.student?.map((student)=>(
                                        <div key={student.id}>
                                            <ul>
                                            <li>
                                                <div>
                                                  <h4>{student.id}</h4>
                                               </div>
                                            </li>
                                            <li>
                                                <div>
                                                  <h4>{student.name}</h4>
                                               </div>
                                            </li>
                                            <li>
                                                <div>
                                                  <h4>{student.email}</h4>
                                               </div>
                                            </li>
                                        </ul>
                                        </div>
                                    ))
                                }
                            </li>
                        </ul>

        </div>
    )
}
export default College