
import React  , {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import  Error from "../src/components/Error"
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import ResturantMenu from "./components/ResturantMenus";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart"
// import Grocery from "./components/Grocery";



  //above code creates complexity for resolve this here is we have JSX
  // root.render(parent);
  //npm is repo for managing pacakges almost all.
  //npx parcel index.html[source file]
  //created a server for this above command
  //npx->executing a paca
  //npm install react
  //hmr = hot module replecaement
  //file watching algorithm
  //parcel gives faster build because it's caching things also
  //parcel also does image optimzation,
  //for production build it also minifies. it also does bundleing
  //consistent hashing-->parcel
  //code splitting-->parcel
  //diagnostis->parcel
  //better error handling suggestion
  //also helps to host on https
  //different build for dev and production build
  //npx parcel build index.html ->prod build
  //tree shacking algorithm ->>parcel->i.e remove unused code 
  //differential building->parcel-> to support old browesers
  //const heading = React.createElement("h1", {id: "heading"}, "this is namste jsx");
  //jsx

  ///const jsxHeading = (<h1 className="headsing">
    //this is namste js
    // </h1>);
  //jsxheading is react elemet that is object.



//React components.
//Two types compoents.
//class based compoents -> old way. uses js class
//functional based components -> new way uses js functions.


//React functional components -> just normal js function, 
// const ele = <span> nnn</span>
// const Titel = (
//  <div>
//    {ele}
//     <h1>namaste title component</h1>
//   </div>
// )
// const number = 1000;
// const HeadingComponent = () =>{
//   return <div>
//     {/* <TitelComponent/> */}
//     {Titel} 
    
//      {/* here u can run any js code */}
//     <h1>namaste functional component</h1>
//   </div>
// }
  //console.log(jsxHeading);
  //console.log(heading);
  // root.render(heading);
  //root.render(jsxHeading);
  // you can wrtite {title()}-> same for functionalcomponent
  //root.render(<HeadingComponent/>)
 // root.render(<HeadingComponent></HeadingComponent>)


  //Food ordering Map
  //analysis , 
  //header -> logo ,nav items
  //body ->search, restrunantcard container
  //footer-> copyrights., adddress, links,

// const Header = () => {
//   return (
//   <div className="header">
//     <div className="logo-container">
//       <img  className="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg"/>
//     </div>
//     <div  className="nav-items">
//     <ul>
//       <li>
//         Home
//       </li>
//       <li>
//       Aboout uS
//       </li>
//       <li>
//        Contact Us
//       </li>
//       <li>
//       Add to Cart
//       </li>
//     </ul>
//     </div>
//   </div>
//   )
  
// }










// const Body = (props) =>{
 
//   return (
//     <div className="body">
//       <div className="search">
//        search...
//       </div>
//       <div className="res-container">
//       {
        
//       resObje.map((resturant) => {
//         console.log(resturant , "res")
//          return <ResturantContainer  key = { resturant.info.id } resData = {resturant.info} />
         
//          })}
//       </div>
//     </div>
//   )
// }

//chunking
//code splitting
//dynamic bundling
//lazy loading
// on demand loading
//dynamic import
// lazy is function given by react to us.

const Grocery = lazy(()=>{
  return import("./components/Grocery")
});

  const AppLayout = () => {

    const [userInfo , setuserInfo] = useState();
    useEffect(()=>{
 const data = {
  name : "shreya sharma"
 }
 setuserInfo(data.name)
    })
    return (
      <Provider store={appStore}>
      <UserContext.Provider value = {{logged : userInfo}}>
      <div className="app">

        <Header/>
        <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
     
    )
    
  }
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
          path: "/",
          element: <Body/>,
          //errorElement: <Error />
        },
        {
          path: "/about",
          element: <About/>,
          errorElement: <Error />
        },
        {
          path: "/contact",
          element: <Contact/>,
          errorElement: <Error />
        },
        {
          path: "/resturants/:resId",
          element: <ResturantMenu/>
        },
        {
          path: "/grocery",
          element: <Suspense fallback={<h1>loading</h1>}><Grocery/></Suspense> 
        } ,
        {
          path: "/cart",
          element: <Suspense fallback={<h1>loading</h1>}><Cart/></Suspense> 
        } 
      ],
     // errorElement: <Error />
    },
    
  ])

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<RouterProvider router ={appRouter}/>)



