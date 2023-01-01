import { useState } from "react"
import Login from "./Login"
import User from "./User"

const UseContextHook = () => {
  const [userName, setUserName] = useState("")
  return (
    <div>
      UseContextHook
      <Login setUserName={setUserName} />
      <User userName={userName} />
    </div>
  )
}
export default UseContextHook
