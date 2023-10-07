import { useState } from "react";

const useToggle = (defaultValue) => {
 const [show, setShow] = useState(false);

 const toggle = (defaultValue) => {
  setShow(!show);
 }
 return { toggle, show }
}

export default useToggle;