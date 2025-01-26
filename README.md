# React
//classbased components
cycle of class components.

when class loads new instace is created and constructor is called and then render function is called.
parent constructor
parent render
child constructor
child renders

constructor
then 
render
then
componentDidMount

parent constructor
parent render
child constructir
child render
child  componentDidMount
parent componentDidMount


componentDidMount is used to make api calls.
why it is made?

if their is multiple children.

parent constructor
parent render
firdt child constructor
first render
second child c
second render
first componentDidMount
sec   "
parent "


constructor(dummy)
render(dummy)
<html dummy>
component did mount
<api call>
<this.state>(state variable is updtaed)
update cycle



render(api date)
<htm l loadaed>
<component did update>


single responsiblity principle.
it makes code more maintable, testable and resuable.
custom hooks,
hooks are js functions , special onees given by react.
hooks is just a utility function.



higher order components

higher order is a function that takes the component and returns the component.
They are pure functions

liftting the state up -> interview q 

propes drilling
drilling the propes from parent top leaft to bottom leaf , this i sthe problem in react


React context 
it gives u global scope a piece of data u can use anywhere in your project
hooks-> useContext;
<UserContext.Provider value={()}>
//redux works in data layer
// redux and react are different librarries
// why redux ?
to have use in large projects same like zustand.
//easerie to debug
//react-redux and redux tookit. 


///redux
//dispatches the action.
//reducer function
dispatches actions -> call reducer the function --> which updtes and modify the slice of redux store.

//selector is used to read data from store that uses in component