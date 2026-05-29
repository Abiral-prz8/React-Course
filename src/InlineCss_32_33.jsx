import { useState } from "react"
import StudentData from "./InlineCss2_32-33"

function Inline() {
    

    const [cardStyle,setCardStyle] = useState(
        {
        border: '2px solid #e9e2e2',
        width: '260px',
        padding: '31px',
        margin:'50px',
        boxShadow: '5px 5px 20px 4px #b811d3',
        textAlign: 'center',
        color:'black'
        
    }
    )

    const [grid,setGrid]=useState(true)

    
    const updateTheme=(bgColor,textColor)=>{
        setCardStyle({...cardStyle,backgroundColor:bgColor,color:textColor})
    }
    const student=[
        {
            name:'Ram Suwal',
            college:'BMC College',
            faculty:'BCA',
            department:'Humanities'
        },
        {
            name:'Hari Pokhrel',
            college:'BMC College',
            faculty:'BIT',
            department:'Science'
        },
        {
            name:'Sita Suwal',
            college:'KMC College',
            faculty:'BCA',
            department:'Humanities'
        },
        {
            name:'Shyam Duwal',
            college:'LMC College',
            faculty:'BCA',
            department:'Humanities'
        },
        {
            name:'Naresh Suwal',
            college:'BMC College',
            faculty:'BCA',
            department:'Humanities'
        },
        {
            name:'Amit Lama',
            college:'JJ College',
            faculty:'BIM',
            department:'Management'
        }
    ]
    return (
        <div style={{ margin: '40px' }}>
           
            <h1 style={{ color: 'red' }}>Inline Style in JSX</h1>
            <button onClick={()=>updateTheme('#e29fec','#9b4bba')}>Grey Theme</button>
            <button onClick={()=>updateTheme('#ebc097','#7e5605')}>Brown Theme</button>
            <button onClick={()=>setGrid(!grid)}>Change Grid</button>
            

         
            <div style={{display:grid?'flex':'block', flexWrap:'wrap'}}>
                
                <div style={cardStyle}>
                    <img style={{ width: '255px' }} src="change-location.webp" alt="photo" />
                      <StudentData student={student[0]} />
                 
                    
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '255px' }} src="change-location.webp" alt="photo" />
                    <StudentData student={student[1]} />
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '255px' }} src="change-location.webp" alt="photo" />
                    <StudentData student={student[2]} />
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '255px' }} src="change-location.webp" alt="photo" />
                    <StudentData student={student[3]} />
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '255px' }} src="change-location.webp" alt="photo" />
                    <StudentData student={student[4]} />
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '255px' }} src="change-location.webp" alt="photo" />
                    <StudentData student={student[5]} />
                </div>
            </div>

        </div>
    )
}
export default Inline

{/*
31 Inline Style
    > Example with style of A User Profile card
    ---> Write HTML code
    ---> Add inline Style
    > Use JS objr=ect for style
    > Make multiple Card for user profile 
    
 32 Dynamic and conditional Inline Style
    > Make button for dynamic style 
    > Update style on button click
    >Apply style condition
    */}
