import { useState } from "react"

const UseStateObject = () => {
const [person, setPerson] = useState({
 name:'Peter',
 age:24,
 hobby:'Swimming'
})
 

const handleSumbit = () =>{
 // setPerson({name:'john', age:29, hobby: 'badminton'})
 setPerson({...person,hobby:'eating worms'})
}
 return (
  <>
 <div>
   <h4>{person.name}</h4>
   <p>{person.age}</p>
   <p>Enjoy: {person.hobby}</p>
   <button type="button" onClick={handleSumbit}className="btn">Show John</button>
  </div>
  </>
 )
}

export default UseStateObject