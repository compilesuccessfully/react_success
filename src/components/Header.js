import { L0GO_URL } from "../utils/constants";
import React, { useState , useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"

export const Header = () => {
   // let btnName ="Login"
   const [btnName , setbtnName] = useState("Login");
   const data = useContext(UserContext);
   const onlineStatus = useOnlineStatus();
   const cartItems = useSelector((store) => store.cart.items);

   useEffect(()=>{
       console.log("headers useeffect called");
   }, []);
  return (
  <div className="flex justify-between bg-pink-200 shadow-lg mb-2 ">
    <div className="logo-container">
      <img  className="w-56 border-r-8" src={L0GO_URL}/>
    </div>
    <div  className="flex items-center ">
    <ul className="flex p-4 m-4">
      <li className="px-4">
        Online Status: {onlineStatus ? "y"  : "n"};
      </li>
      <li className="px-4">
      <Link to="/">  Home</Link> 
      
      </li>
      <li className="px-4">
     <Link to="/about">Aboout us</Link> 
      </li>
      <li className="px-4">
      <Link to="/contact">Contact Us</Link> 
       
      </li>
      <li className="px-4">
      <Link to="/grocery">Grocery</Link> 
       
      </li>
      <li className="px-4 font-bold text-xl">
      <Link to="/cart">Add to Cart({cartItems.length} items)</Link> 
      
      </li>
      <li className="px-4 bold">
      {data.loggedInUser}
      </li>
      <button className="login" onClick={
        ()=>{
           // btnName ="Logout"

        btnName == "Login" ?   setbtnName("Logout") :   setbtnName("Login")
        }
      }> {btnName} </button>
    </ul>
    </div>  
  </div>
  )
  
}
export default Header;