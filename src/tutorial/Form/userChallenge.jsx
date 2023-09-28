import React,{useState} from 'react';
import {data} from "../../data";

const UserChallenge = () => {
 const [ name, setName] = useState('');
 const [ users, setUsers] = useState(data);

 const handleSubmit = (e) => {
  e.preventDefault();
  setUsers(e.target.value);
  if(!name) return;
  const fakeId = Date.now();
  const newUser = {id:fakeId,name}
  const updatedUsers = [...users, newUser];
  setUsers(updatedUsers);
  setName('');

 }

 const removeUsers = (id ) => {
 const updatedUsers = users.filter((person)=>
person.id !== id)


  setUsers(updatedUsers);
 }
  return (
   <>
    <form action="" className="form" onSubmit={handleSubmit}>
     <h4>Add User</h4>
     <div className="form-row">
      <label htmlFor="name" className='form-label'>name</label>
      <input type="text" className='form-input'id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
     </div>
     <button type="submit" className='btn btn-block'>submit</button>
    </form>
    <h4>Users</h4>
    {users.map((user)=>{
return <div key={user.id}>
 <h4>{user.name}</h4>
 <button onClick={()=>{removeUsers(user.id)}} className='btn'>remove</button>
</div>
    })}

    </>
  )
}

export default UserChallenge