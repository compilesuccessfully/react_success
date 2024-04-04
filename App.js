const heading = React.createElement("h1", {id: "heading"}, "hello from namastereact");
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(heading);// returns react elements, ie js object
root.render(heading);
//{} object uses to create attribute to class

//nested structure
// const parent = React.createElement("div",{id: "parent"},
// React.createElement("div",{id: "child"},[React.createElement("h1", {},"i m h1 tag"),React.createElement("h2", {},"i m h2 tag")]
// ))

//Reactelement(object)=html(browser umderstands);
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div", { id: "child3" }, [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div", { id: "child4" }, [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag")
    ])
  ]);
  //above code creates complexity for resolve this here is we have JSX
  root.render(parent);
  //npm is repo for managing pacakges almost all.
  //npx parcel index.html[source file]
  //created a server for this above command