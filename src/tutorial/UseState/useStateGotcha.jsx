import { useState } from "react";

const UseStateGotcha = () => {
 const [value, setValue] = useState(0);
 
 const handleSubmit = () =>{
 
   setTimeout(()=>{
setValue((currentValue)=>{
return currentValue + 1;
})
   },3000);
  
 }
 return (
  <div>
   <h1>{value}</h1>
   <button onClick={handleSubmit} className="btn">increase</button>
  </div>
 
 )
}

export default UseStateGotcha