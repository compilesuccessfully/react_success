
import React, { useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import useResMenu from "../utils/useResMenu";
import ResturantContainer from "./ResturantCard";
import ResCategory from "./ResCategory";


const ResturantMenu = ()=>{
//const  [resInfo , setResInfo] = useState(null);
const { resId} = useParams();


const resInfo = useResMenu(resId);
const [showIndex, setshowIndex] = useState(0);
//  useEffect(()=>{
//  fetchMenu();
//   } ,[])
// const fetchMenu =  async () => {
//   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resId+"&catalog_qa=undefined&query=South%20Indian&submitAction=ENTER");
//   const json = await data.json();
//   console.log(json);
// setResInfo(json.data);
// }
if(resInfo === null )  return <Shimmer/>;
const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards
;
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>{
 c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
})
//console.log(categories , "cat");
console.log(
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card , "l");

 return (<div  className="text-center">
    <h1 className="font-bold my-10 text-2xl"> {resInfo?.cards[0]?.card?.card.text}</h1>
    <div className="font-bold text-lg">
    <h4>{resInfo?.cards[2]?.card?.card.info.cuisines.join(",")}</h4>
    </div>
  
   
       <h2>{resInfo?.cards[2]?.card?.card.info.costForTwoMessage}</h2>
       <div>
       {itemCards.map((category , index)=>{
       return <ResCategory  key = {category.card} data={category.card}
       showItems = {index === showIndex && true}
       setShowIndex = {()=> setshowIndex(index)}/>

    })}
       </div>
       

  
 </div>)
}


export default ResturantMenu;


// * <ul>
// {(itemCards).map(item  => <li key={item.card.info.id}>{item.card.info.name} -{item.card.info.price}</li>)}
// {/* <li>{itemCards[0].card.info.name}</li> */}
// <li>Burger</li>
// </ul> 