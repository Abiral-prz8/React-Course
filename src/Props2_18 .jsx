export default function Props2({name,email,user,student}){ 
    // You can also pass like this(props) and {props.name}
    return(
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{user.Sname}</h1>
            <h1>{user.age}</h1>
            <h1>{user.address}</h1>
            <h1>{student}</h1>

            
        </div>
    )
}