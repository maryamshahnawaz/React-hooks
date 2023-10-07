import React, { useState, useEffect } from 'react'

const useFetchPerson = (url) => {
 const [isLoading, setIsLoading] = useState(true);
 const [isError, setIsError] = useState(false);
 const [user, setUser] = useState(null);

 useEffect(() => {
  const fetchUser = async () => {
   try {
    const response = await fetch(url);
    if (!response.ok) {
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
 }, []);

 return (
  { isError, isLoading, user }
 )
}

export default useFetchPerson