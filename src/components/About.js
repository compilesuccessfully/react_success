import React  from "react";
// import User from "./User";
import UserClass from "./UserClass";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

// const About = ()=>{
//     return (
//         <div>
//             <h1>aBOUT</h1>
//             <h2>This is react project</h2>
//             {/* <User name={"shre"}/> */}
//             < UserClass name={"shre"}/>
//         </div>
//     );
// }
class About extends React.Component {

    constructor(props){
        super(props)
    }
    componentDidMount(){
        
    }
render(){
    return (
                <div>
                    <h1>aBOUT</h1>
                    <div>loggedInUser <UserContext.Consumer>{(data) => data.loggedInUser}</UserContext.Consumer></div>
                    <h2>This is react project</h2>
                    < UserClass name={"shre"}/>
                   
              
                </div>
        );
}
}
export default About ; 