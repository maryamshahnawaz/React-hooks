import useToggle from "./useToggle"

const Toggle = () => {
 const {show, toggle } = useToggle(false)
  return (
    <div>
     <h4>Custom Toggle Hook</h4>
     <button className="btn" onClick={toggle}>
toggle
     </button>
     {show && <h3>content</h3>}
    </div>
  )
}

export default Toggle