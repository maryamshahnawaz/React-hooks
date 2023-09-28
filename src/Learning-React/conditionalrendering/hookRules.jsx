import { useState,useEffect } from "react";

const hookRules = () =>{

 //dont places inside of if condition it wont work
const [condition,setCondition] = useState(true);
// if(condition) {
//  //it wont work
// const [condition,setCondition] = useState(true);

// }
if(condition){
 return <h2>Hello there</h2>
}

// if you have multiple jsx return based on conditional rendering, dont place use effect after them
// this will also fail


useEffect(()=>{
console.log('hello there');
},[])
return <h2>Example</h2>
}

export default hookRules;
