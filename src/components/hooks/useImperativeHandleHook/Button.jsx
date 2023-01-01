import { forwardRef, useImperativeHandle, useState } from "react"

const Button = forwardRef(({ children }, ref) => {
  const [toggle, setToggle] = useState(false)
  // const onClick = () => {
  //   setToggle(!toggle)
  // }
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle)
    },
  }))
  return (
    <div>
      <button
      //  onClick={onClick}
      >
        {children}
      </button>
      {toggle && <span> Toggle</span>}
    </div>
  )
})
export default Button
