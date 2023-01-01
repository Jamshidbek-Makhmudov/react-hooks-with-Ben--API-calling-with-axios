import { useRef } from "react"

const UseRefHook = () => {
  const inputRef = useRef(null)
  const onClick = () => {
    inputRef.current.focus()
    inputRef.current.value = ""
  }
  return (
    <div>
      UseRefHook
      <h1>Jamshid</h1>{" "}
      <input type='text ' placeholder='type...' ref={inputRef} />{" "}
      <button onClick={onClick}>change name</button>
    </div>
  )
}
export default UseRefHook
