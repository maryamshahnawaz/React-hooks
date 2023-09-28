import React, {useState} from 'react';
import {people} from "../../data";
import Person from "./Person";
const List = () => {

 const [ persons, setPersons]  = useState(people);


  return (
   <div>
 {persons.map((person)=>{
   return (
    <Person key={person.name} {...person}/>
   )
 
   }
 )}
   </div>
  )
}

export default List