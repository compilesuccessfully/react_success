
import { useEffect } from "react";
import { useState } from "react";


const useResMenu = (resId)=>{
    const [resInfo , setresInfo] = useState(null);
    //fetch data
    useEffect(()=>{
        fetchData()
    }, []);
   const  fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resId+"&catalog_qa=undefined&query=South%20Indian&submitAction=ENTER")
    const json = await data.json();
    setresInfo(json.data);
    console.log(json , "k");
   }
 return resInfo ;
}
export default useResMenu;