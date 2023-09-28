import { useEffect, useState } from "react";

const MultipleEffects = () => {

 const [value, setValue] = useState(0);
 const [secondValue, setSecondValue] = useState(0)
useEffect(()=>{
console.log('hello from first useEffect');
},[value]);
useEffect(()=>{
console.log('hello from second useEffect');
},[secondValue]);
// you can have multiple useEffect
// dependencey array where we can pass multiple values and every times the value is changed we will invoke the functionality inside of the callback function one more time

return(
<>
<h1>value: {value}</h1>
<button className="btn" onClick={()=>setValue(value + 1)}>value</button>


<h1>Second value: {secondValue}</h1>
<button className="btn" onClick={()=>setSecondValue(secondValue + 1)}>second value</button>


</>
)
}

export default MultipleEffects;