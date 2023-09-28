import { useState, useEffect } from "react"


// usually three options
// loading
// error
// suucess
//destructuring alwats happens after the conditional redering
const url = 'https://api.github.com/users/maryamshahnawaz'
const multipleReturnsFetchData =() => {

const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [user, setUser] = useState(null);


useEffect(() => {
 const fetchUser = async () => {
 try {
  const response = await fetch(url);
  if(!response.ok){
    setIsError(true);
    setIsLoading(false);
    return
  }
  const user = await response.json();
  setUser(user);
  console.log(user)
 }
  catch (error) {
  setIsError(true)
  console.log(error);
 }
   setIsLoading(false);
}
fetchUser();
},[]);

if(isLoading){
 return <h1>Loading....</h1>
}

if (isError) {
 return <h1> there was an error</h1>
}
const {avatar_url,name,company,bio} = user;
 return(
  
   <div>
    <img src={avatar_url} alt={name} style={{width:"150px", borderRadius:'25px'}} />
    <p>{name}</p>
    <h3>Works at {company}</h3>
    <p>{bio}</p>
   </div>
 )
}

export default multipleReturnsFetchData;