import { useState,useEffect } from "react";

const shortCircuitExample = () => {

 // There are only six falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string),
 // so basically false is also a truthy value

 //if we use ! mark we make  falsy value truthy with not operator
// falsy
 const [text,setText] = useState('');

 // truthy
 const [name,setName] = useState('susan');
 const [user,setUser] = useState({name:'John'});
 const [isEditing,setIsEditing] = useState(false);
return (  
 <div>
  <h1>{text || 'default value'}</h1>
  {text && <div>
   <h2>return</h2>
   <h2>{name}</h2>
   </div>
   }

   {/* <h1>{!text || 'default value'}</h1>
  {text && <div>
   <h2>return</h2>
   <h2>{name}</h2>
   </div>
   } */}

   {user && <SomeComponent name={user.name}/>}
   <h2 style={{margin: '1rem 0'}}>Ternary Operator</h2>
   <button className="btn">{isEditing? 'edit' :'add' }</button>
   {user ?<div>
   <h2>hello user</h2>
   <h2>{user.name}</h2>
   </div>: <div>
   <h2>pls login</h2>
   
   </div> }
 </div>
)
}

const SomeComponent = ({name}) => {
return <div>
   <h2>return</h2>
   <h2>{name}</h2>
   </div>
}

export default shortCircuitExample;

