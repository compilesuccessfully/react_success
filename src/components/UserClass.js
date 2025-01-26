import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);
        this.state = {
            count:0,
            count1: 2,
            userInfo:{
                name: "avsc",
                location: "default"
            }
        }
        
    }
   async componentDidMount(){
        //console.log("child compound mount");
        const data = await fetch("https://api.github.com/users/shrey");
        const json = await data.json();
        console.log(json)

        this.setState({
            count: this.state.count + 1,
            userInfo : json,
       })
    }
    componentDidUpdate(){

    }
    componentWilUnmount(){
        console.log("to be call when the specific component disappers")
    }
    render(){
        return <div className="user-card">
            <h1>{this.state.count}</h1>
            {/* <h1>{this.state.count1}</h1> */}
            <button onClick={()=>{
                //TOD: NEVER UPDTAE STATE VARIABLES DIRECTLY.
                

            }}>Count iNCREASE</button>
        <h2>{this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>shreya.tin@123gs</h4>
    </div>
    }

}
export default UserClass