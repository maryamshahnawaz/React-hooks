import { useState } from "react";

const UserChallenge = () => {

 const [ user, setUser] = useState(null);

 const login = () =>{
  setUser({name:'john'});
  return
 }

  const logout = () =>{
  setUser(null);
 }
 

 return (
  <>
{user ? <div>
 <h4>{user.name}</h4>
 <button className="btn" onClick={logout}>logout</button>
</div> :
<div>
<p>please login</p>
 <button className="btn" onClick={login}>login</button>
 </div>
}
  </>
 )
}

export default UserChallenge;