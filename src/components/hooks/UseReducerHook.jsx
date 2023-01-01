import { useReducer } from "react"
const reducer = (state, action) => {
  const { type } = action //  type ni yonida payload ham bolishi kerak.
  switch (type) {
    case "INC":
      return { count: state.count + 1, showText: !state.showText }
    case "DEC":
      return { count: state.count - 1, showText: !state.showText }
    case "CLEAR":
      return { count: 0, showText: !state.showText }
    default:
      return state
  }
}
//useReducer hooki statelar juda coplex bolib ketgadan va context hook ishlatgan qulay
const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })
  return (
    <div>
      UseReducerHook
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" })
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          if (state.count > 0) {
            dispatch({ type: "DEC" })
          }
        }}
      >
        remove
      </button>
      <button
        onClick={() => {
          dispatch({ type: "CLEAR" })
        }}
      >
        clear
      </button>
      {state.showText && <p>this is your text</p>}
    </div>
  )
}
export default UseReducerHook
