
const ErrorExample = () => {

 let count = 0;

 const handleClick = () => {
 count = count + 1;
 }

 return (
  <div>
<h1>{count}</h1>
<button type="button" onClick={handleClick} className="btn">increase</button>
  </div>

 )
}

export default ErrorExample;

