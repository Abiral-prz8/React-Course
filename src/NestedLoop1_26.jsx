import College from "./NestedLoop2_26"
import StudentData from "./NestedLoop2_26"

function  CollegeData(){
    const collegeData=[
       {
        name :"BMC",
        city: "Bhaktapur",
        website: "www.bmc.com",
        student:[
            {
                id: "1",
                name: "Ram",
                email: "Ram123@gmail.com"
            },
            {
                id: "2",
                name: "Shyam",
                email: "Shyam123@gmail.com"
            },
            {
                id: "3",
                name: "Sita",
                email: "Sita123@gmial.com"
            }
        ]
       },
       {
        name :"KMC",
        city: "Kathmandu",
        website: "www.kmc.com",
         student:[
            {
                id: "1",
                name: "Ram",
                email: "Ram123@gmail.com"
            },
            {
                id: "2",
                name: "Shyam",
                email: "Shyam123@gmail.com"
            },
            {
                id: "3",
                name: "Sita",
                email: "Sita123@gmial.com"
            }
        ]
       },
       {
        name :"LMC",
        city: "Lalitpur",
        website: "www.lmc.com",
         student:[
            {
                id: "1",
                name: "Ram",
                email: "Ram123@gmail.com"
            },
            {
                id: "2",
                name: "Shyam",
                email: "Shyam123@gmail.com"
            },
            {
                id: "3",
                name: "Sita",
                email: "Sita123@gmial.com"
            }
        ]
       }
     ]
    return(
        <div>
            {
                collegeData.map((college,index)=>(
                    <div key={index}>
                       <College college={college}/>
                    </div>

                ))
            }

        </div>
    )
}
export default CollegeData