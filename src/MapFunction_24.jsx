function Mapfn() {
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
    return (
        <div>
            <h1>Loop with map fn</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>age</td>
                        <td>email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
export default Mapfn