import { useState } from "react";

const useStateHook = () =>{
 const [count,setCount ] = useState(0);
 const handleClick = () =>{
  setCount(count+1)
 }
 
 return (
  <div>
   <h4>You Clicked {count} Times</h4>
   <button type="button" className="btn" onClick={handleClick}>Increase</button>
  </div>
 )
}

export default useStateHook;