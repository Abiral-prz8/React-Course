function User2({ user }) {
    return (
        <div style={{
            border:"2px solid black",
            padding:"10px",
            margin:"10px",
            width:"400px",
            borderRadius:"30px"
        }}>
            <h1>ID:<span style={{ color: "green" }}>{user.id}</span></h1>
            <h1>Name:<span style={{ color: "green" }}>{user.name}</span></h1>
            <h1>Age:<span style={{ color: "green" }}>{user.age}</span></h1>
            <h1>Email:<span style={{ color: "green" }}>{user.email}</span></h1>
        </div>
    )
}
export default User2