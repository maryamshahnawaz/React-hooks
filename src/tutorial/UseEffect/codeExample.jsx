import { useState } from "react";

const CodeExample = () => {

 const [value,setValue] = useState(0);

 const sayHi = () =>{
  console.log('hi');
  // it can end up to infinte loop when changing state value
  // Dont update state in such function
  setValue(value + 1 )
  // it will give an error
 }
 sayHi();

 return (
<>
<h4>Value: {value}</h4>
<button type="button" className="btn" onClick={()=> setValue(value + 1)}>Click Me</button>
</>
 )
}

export default CodeExample;