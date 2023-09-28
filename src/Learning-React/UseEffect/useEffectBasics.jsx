import { useState, useEffect } from "react";
// how useEffect helps us to run code conditionally in our application

// we can choose when do we wanna run certain code inside of our component.
// useEffect is a hook in React that allows you to perform side effects in function components. some examples of the side effect are: PushSubscriptionOptions, fetching data, directly updating the DOM, event listeners, timer, etc.

// useEffect accet two arguments(second is optional)
// first argument - callback function
// second argument is dependency array
// by default it runs on each render(initial and re-render)
// callback function can't return promise (so can't make is async) 
// if dependency array empty [ ] runs only on initial render;

// useEffect by default intial render and re-render when state change but if we use second argument(empty array) it will only be render on intial
// we cannot set async and awit function inside useEffect because async return a promise and use effect is not return a promise so no to async function inside use Effect.

// basically dont use async as a first argument inside useeffect but you can create a async funmction inside useeffect but not as a first argument.
const UseEffectBasics = () => {
 const [value,setValue] = useState(0);
 const sayHi = () =>{
  console.log('hi');
 }
 sayHi();

 useEffect(()=>{
console.log('hello from useEffect')
// by using empty array we can prevent default behaviour of useEffect of re-rendering
 },[])
  return (
<>
  <h4>Value: {value}</h4>
  <button type="button" className="btn" onClick={()=> setValue(value + 1)}>Click Me</button>
</>
 )

}

export default UseEffectBasics;