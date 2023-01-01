import { useRef } from "react"
import Button from "./Button"
//useImperativeHook bizga qachon child component ichidagi buyruqlarga parentdan access qilishimiz uchun kerak bo'ladi.

const UseImperativeHandleHook = () => {
  const buttonRef = useRef(null)
  return (
    <div>
      UseImperativeHandleHook
      <div>
        <button
          onClick={() => {
            buttonRef.current.alterToggle()
          }}
        >
          parent
        </button>
        <Button ref={buttonRef}>Child</Button>
      </div>
    </div>
  )
}
export default UseImperativeHandleHook
