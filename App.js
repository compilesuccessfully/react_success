
import React from "react";
import ReactDOM from "react-dom/client";


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

  const root = ReactDOM.createRoot(document.getElementById("root"));
  //const heading = React.createElement("h1", {id: "heading"}, "this is namste jsx");
  //jsx

  const jsxHeading = (<h1 className="headsing">
    this is namste js
     </h1>);
  //jsxheading is react elemet that is object.



//React components.
//Two types compoents.
//class based compoents -> old way. uses js class
//functional based components -> new way uses js functions.


//React functional components -> just normal js function, 
const ele = <span> nnn</span>
const Titel = (
 <div>
   {ele}
    <h1>namaste title component</h1>
  </div>
)
const number = 1000;
const HeadingComponent = () =>{
  return <div>
    {/* <TitelComponent/> */}
    {Titel} 
    
     {/* here u can run any js code */}
    <h1>namaste functional component</h1>
  </div>
}
  console.log(jsxHeading);
  //console.log(heading);
  // root.render(heading);
  //root.render(jsxHeading);
  // you can wrtite {title()}-> same for functionalcomponent
  root.render(<HeadingComponent/>)
  root.render(<HeadingComponent></HeadingComponent>)
 