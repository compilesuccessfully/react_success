import React from "react"
import { useState } from "react"


const User = (props) =>{
    const [count , setcount]= useState(0)
    const[ count1 , setcount1]= useState(1)
    return <div className="user-card">
        <h2>{count}</h2>
        <h2>{count1}</h2>
        <h2>Name: {props.name}</h2>
        <h3>Location: GAJRAULA</h3>
        <h4>shreya.tin@123gs</h4>
    </div>
}
export default User