import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Itemlist = ({ items }) => {
    const dispatch = useDispatch();
    const  handleItem = (item)=>{
        //dispatch action
       dispatch(addItem(item));
    }
    console.log(items, "i");

    // Convert items to an array for rendering
    const itemsArray = Array.isArray(items) ? items : [items]; // Wrap single item into an array
    console.log(itemsArray, "i");

    return (
        <div>
            {itemsArray.map((item) => (
                <div key={item.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between w-9/12">
                   
                    <div className="p-2">
                        <div>
                       
                            </div>
       
                        <span>{item.name || "Unknown Name"}</span>
                        <span className="text-xs">{item.description}</span> {/* Assuming price is in paise */}
                        <span>{item.price ? item.price / 100 : "Unknown Price"}</span> {/* Assuming price is in paise */}

 <div className="absolute">
                       <button className="p-2 bg-white shadow-lg  m-auto mx-16 rounded-lg"
                       onClick = {
                        ()=>handleItem(item)
                       }
                       >Add +</button>
                       </div>
                       <img src={CDN_URL + item.imageId
 } className="w-6/12 p-4"/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Itemlist;
