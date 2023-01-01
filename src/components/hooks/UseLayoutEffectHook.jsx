import { useEffect, useLayoutEffect, useRef } from "react"
//useLayoutEffect hooki useEffect hookiga shuda oxshash va deyerli bir xil vazifa bajaradi
// farqi shundaki useLayoutEffect useEffectdan oldin chaqiriladi, va asosan page render bolishidan oldin userga korinishi kerak bolgan datalar kiritiladi.

const UseLayoutEffectHook = () => {
  const inputRef = useRef(null)
  useLayoutEffect(() => {
    console.log(inputRef.current.value)
  }, [])
  useEffect(() => {
    inputRef.current.value = "Shoxrux"
  }, [])
  return (
    <div>
      UseLayoutEffectHook
      <input type='text' value='Jamshid' ref={inputRef} />
    </div>
  )
}
export default UseLayoutEffectHook
