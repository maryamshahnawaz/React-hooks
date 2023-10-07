import { useState, useEffect } from "react"
import useFetch from "../customHook/useFetch";


// usually three options
// loading
// error
// success
//destructuring always happens after the conditional re-rendering
const url = 'https://api.github.com/users/maryamshahnawaz'
const MultipleReturnsFetchData =() => {

  const {isError,isLoading,data: user} = useFetch(url);

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

export default MultipleReturnsFetchData;