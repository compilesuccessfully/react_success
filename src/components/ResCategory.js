import React, { useState } from "react"
import Itemlist from "./itemList";



const ResCategory = ({data , showItems , setShowIndex})=>{
    // const [showItems , setshowItems] = useState(false);
    const handleClick =()=>{
        console.log("click");
        setShowIndex();
        //setshowItems(!showItems);
    }
    console.log(data);
      return <div>
        {/* ResCategory */}
      
        <div className="w-6/12 mx-auto  my-4  bg-gray-50 shadow-lg p-4 " onClick={handleClick}>
        <div className="flex justify-between cursor-pointer" >
            <span className="font-bold text-lg" >{data.info.name} {data.info.inStock}</span>
            <span>|</span>
            </div>
             {  showItems && <Itemlist items={data.info}/>}
           
        </div>
    
              
                
      </div>

}
export default ResCategory