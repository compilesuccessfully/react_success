import React from "react"
import { CDN_URL } from "../utils/constants"

const styleCard = {
    backgroundColor: "#f0f0f0"
  }
  

const ResturantContainer = (props)=>{
    console.log(props , "propss")
  const { resData } = props
   
    return ( 
      // resData.map((res)=>
      // (
      <div className="m-4 p-4 w-[250px] rounded-lg"  key = {resData.id } style={styleCard}>
      {/* <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}></div> */}
     <img className="res-logo rounded-lg" alt="res-logo" src={CDN_URL + resData.cloudinaryImageId }/>
     <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
     <h3>{resData.description}</h3>
     <h4>{resData.cuisines.join(",")}</h4>
     <h2>{resData.avgRatingString}</h2>
     <h2>{resData.deliveryTime}</h2>
     <h2>{resData.costForTwo}</h2>
     </div>
      // )
  
   //)
   )
    }

    export const withPromotedLabel = (ResturantContainer) => {
      return (props) =>{
        return (
          <div>
              <label>Promoted</label>
              <ResturantContainer {...props}/>
          </div>
        )
      };
    }
    export default ResturantContainer;
  