import { useState } from "react";
import {data} from "../../data"

const useStateArray = () => {
 const [people, setpeople] = useState(data);
 const handleSubmit = (id) => {
  setpeople(people.filter((person)=>person.id !== id))

 }
return (
 <>
 <div>
  {people.map((person)=>{
   const {name, id} = person;
   return(
   <div key={id}>
<h4>{name}</h4>
<button type="button" className="btn" onClick={()=> handleSubmit(id)}>Remove</button>
 </div>
   )
  })}
  <button type="button" style={{marginTop: '2rem'}}className="btn" onClick={()=>setpeople([]) }>RemoveAll</button>
 </div>
 </>
 
)
}

export default useStateArray;