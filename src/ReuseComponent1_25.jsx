import User2 from "./ReuseComponent2_25"

function User(){
        const userData = [
        {
            id: '1',
            name: 'Ram',
            age: '19',
            email: 'ram123@gmail.com'
        },
        {
            id: '2',
            name: 'Shyam',
            age: '23',
            email: 'Shyam123@gmail.com'
        },
        {
            id: '3',
            name: 'Sita',
            age: '19',
            email: 'Sita123@gmail.com'
        }
    ]
    return(
        <div>
            <h1>Reuse Component</h1>
            {
                userData.map((user)=>(
                    <div key={user.id}>
                        <User2 user={user}/>
                    </div>
                ))
            }
        </div>
    )
}
export default User