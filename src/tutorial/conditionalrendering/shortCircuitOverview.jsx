import { useState, useEffect } from "react";

const ShortCircuitOverview = () => {
 const [text,setText] = ('');
 const [name,setName] = ('Susan');

const codeExample = text || 'hello world'

return (
<>
{/* hello world */}
<h4>Falsy OR: { text || 'hello world'}</h4>
{/* won't render anything */}
<h4>Falsy AND: { text && 'hello world'}</h4>
{/* Susan */}
<h4>Truthy OR: {name || 'hello world'}</h4>
{/* if first condition is true it will right away render the second statement  hello world */}
<h4>Truthy AND: { name && 'hello world'}</h4>
</>
)
}

export default ShortCircuitOverview;