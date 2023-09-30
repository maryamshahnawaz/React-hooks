import React,{useState, useRef, useEffect} from 'react';

const UseRefBasics = () => {
const [value,setValue]= useState(0);
const refContainer = useRef(null);
const isMounted = useRef(false);
// console.log(refContainer);

 const handleSubmit = (e) => {
  e.preventDefault();
  const name = refContainer.current.value
  console.log(name);
 }

 useEffect(()=>{
  //if we don't use empty array inside use effect it wont cause infinite loop like use state which re-render on every state change, 
  refContainer.current.focus();
 })
useEffect(()=>{
 if(!isMounted.current){
  isMounted.current = true;
  return;
 }
 console.log('re-render');
},[value])
 
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className='form-label'>
            Name
          </label>
          <input type="text" className='form-input' id="name" name="name" ref={refContainer}/>
        </div>
        <button type="submit" className='btn btn-clock'>submit</button>
       </form>
       <h1>value : {value}</h1>
       <button onClick={() => setValue(value + 1)} className='btn'>Increase</button>
       </div>
  )

}

export default UseRefBasics