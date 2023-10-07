import { useEffect,useState } from "react";


const CleanupFunction = () =>{
 const [toggle, setToggle] = useState(false);

 
 return (
  <>
  <button className="btn" onClick={()=>setToggle(!toggle)}>toggle</button>
  {toggle && <Component/>}
  </>
 )
}
//if we use component on conditionally,use effect initial render is gonna happen every time when component is mounted.
const Component = () => {
 useEffect(()=>{
 const someFunc = () => {
}
window.addEventListener('scroll', someFunc);
return()=>window.removeEventListener('scroll', someFunc);

 },[])
 return 'hi there'
}
export default CleanupFunction;