function StudentData({student}){
    return(
        <div>
            <h2>Name: {student.name}</h2>
            <h2>Faculty: {student.faculty}</h2>
            <h2>Department: {student.department}</h2>
        </div>
    )
}
export default StudentData 