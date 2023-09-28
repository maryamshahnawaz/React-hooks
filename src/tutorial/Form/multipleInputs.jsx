import React, { useState } from 'react'

const MultipleInputs = () => {
 const [user,setUser] = useState({
  name:'',
  email:'',
  password:'',
 })


 const handleChange = (e) => {
  setUser({...user, [e.target.name ]: e.target.value})
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(user);
 }
  return (
   <form className='form' onSubmit={handleSubmit}>
     <h3>Multiple Inputs</h3>
     {/* name */}
     <div className="form-row">
      <label htmlFor="name" className='form-label'>
name</label>
<input type="text" 
id="name" 
className='form-input' 
value={user.name}
onChange={handleChange}
 name="name"/>
     </div>
     {/* email */}
          <div className="form-row">
      <label htmlFor="email" className='form-label'>
email</label>
<input type="email"
 id="email" 
 className='form-input' 
 value={user.email}
onChange={handleChange} 
name="email"/>
     </div>
     {/* password */}
               <div className="form-row">
      <label htmlFor="password" className='form-label'>
password</label>
<input type="password" 
id="password"
 className='form-input'
  value={user.password}
onChange={handleChange}
 name='password'/>
     </div>
     <button type="submit" className='btn'>sumbit</button>
     </form>

  )
}

export default MultipleInputs;