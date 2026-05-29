import styled from "styled-components"
function StyleComp() {
    // const Heading=styled.h1`
    // color:red;
    // border:2px solid black;
    // border-radius:50px;
    // width:230px;
    // padding:20px;
    // margin:20px`

    const Heading = styled.h1({
        color: 'red',
        border: '2px solid black',
        borderRadius: '50px',
        width: '230px',
        padding: '20px',
        margin: '20px'
    })

    const Btn= styled.button`
    margin:20px;
    width:100px;
    height: 30px;
    border-radius:5px;
    background-color:#daf
    `
    return (
        <div>
            <Heading>This is Heading</Heading>
            <Heading>This is Heading</Heading>
            <Heading>This is Heading</Heading>
            <Heading>This is Heading</Heading>
            <Btn>login</Btn>
            <Btn>sign in</Btn>
            <Btn>sign up</Btn>

        </div>
    )
}
export default StyleComp