import React, {useState}from 'react'

const OtherInput = () => {
  const [ shipping,setShipping] = useState(false)
  const [ framework,setFramework] = useState('react');
  const frameworks = ['react', 'Vue', 'Angular','Svelte']

  const handleShipping = (e) => {
setShipping(e.target.checked);
console.log(e.target.checked)
  }
  const handleFramework = (e) => {
setFramework(e.target.value);
console.log(e.target.value)
  }
  return (
    <div>
      <form action="" className="form">
        <div className="form-row" style={{textAlign:'left'}}>
<label htmlFor="shipping">Free Shipping</label>
<input 
type="checkbox" 
name="shipping"
id="shipping" 
checked={shipping}
onChange={handleShipping}
/>
        </div>
        <div className="form-row" style={{textAlign:'left'}}>
          <label htmlFor="framework" className='form-label'>Framework</label>
          <select 
          name="framework" 
          id="framework"
          value={framework}
          onChange={handleFramework}>
            {frameworks.map((framework)=>{
              return <option key={framework}>{framework}</option>
            })}
          </select>

        </div>
        <button type="submit"className="btn btn-clock">
submit
        </button>
      </form>
    </div>
  )
}

export default OtherInput;