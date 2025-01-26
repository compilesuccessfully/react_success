import React, { useState ,useEffect} from "react"
//import resObje from "../utils/mockData"
import ResturantContainer , {withPromotedLabel} from "./ResturantCard"
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"








const Body = (props) => {


    const [resObje1, setresObjevar] = useState([]);
    const [filterObje1, setfilterObje1] = useState([]);
    const [searchText , setsearchText] = useState("");
    const ResturantCardPromoted  =  withPromotedLabel(ResturantContainer);
    //useeffect two arguments one is call back, and empty array(dependency).
    //useffect calls after component renders.
    useEffect(()=>{
        console.log("use effect")
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
               
            );
            const json = await data.json(); 
            console.log(json);
    
            // Check if the necessary data exists in the JSON response
            if (json && json.data && json.data.cards) {
                // Extract restaurant data from cards array
                //optional chaining
               const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    
              
    
                // Set the extracted restaurant data to the state variable
                setresObjevar(restaurants);
                setfilterObje1(restaurants);
            } else {
                console.error("Data structure does not match expected format");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    // if(resObje1.length === 0){
    //     return <Shimmer/>
    // }
    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus , "onlineStatus");
    if(!onlineStatus) return <h1>looks like u are offline , check ur internet connection</h1>

    return  resObje1.length === 0 ? <Shimmer/> : (
        <div className="body">
            {/* <div className="search">
         search...
        </div> */}
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type ="text" className="border border-solid  border-black" value={searchText} onChange={
                        (e)=>{
                            setsearchText(e.target.value);
                        }
                    }/>
                    <button className="px-4 py-2  bg-green-100 m-4 rounded-lg" onClick={
                        ()=>{
                            //filter the resturant cards and update UI.
                            console.log(searchText);
                            console.log(resObje1 , "l");
                        const filterRes =    resObje1.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            //c//onsole.log(res, "gh"
                            
                         setfilterObje1(filterRes);
                        // setsearchText(resObje1);
                            

                        }
                    } 
                    >Search</button>
                   

                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2  bg-green-100 m-4 rounded-lg"
                    onClick={() => {

                        //filter logic

                        const filterList = resObje1.filter((res) => res.info.avgRating > 4.3);
                        setresObjevar(filterList);
                    }}
                >
                    Top Rated resturant
                </button>
                </div>
        
            </div>
            <div className="res-container flex flex-wrap">
                {

                    filterObje1.map((resturant) => (
                        
                //   <Link key={resturant.info.id} to={"/resturants/"+ resturant.info.id}>
                //         resturant.data.prompted ? <ResturantCardPromoted resData={resturant.info}/> : <ResturantContainer key={resturant.info.id} resData={resturant.info} />
                //         </Link>
                           <Link key={resturant.info.id} to={"/resturants/"+ resturant.info.id}>
                        <ResturantContainer key={resturant.info.id} resData={resturant.info} />
                        </Link>

                    ))}
            </div>
        </div>
    )
}


export default Body;
//React algo
//Reconciliation algorithm is also known as react fibre.
//virtual dom. ==> represenation of actual Dom.=> react elemenet the object js is virtual dom.
//diff algo -> finds difference between actual dom and virtual dom.
 