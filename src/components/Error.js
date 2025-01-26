
import React from "react"
import {useRouteError} from "react-router-dom";

 const Error = () =>{
    const err = useRouteError();
    console.log(err);
       return (
        <div>
            Oops something went wrong!!
        </div>
       )
}
export default Error;

// it gives access to imp hook that is useRouteError via react-dom