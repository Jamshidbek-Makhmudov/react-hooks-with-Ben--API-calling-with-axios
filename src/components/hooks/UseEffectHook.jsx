import axios from "axios"
import { useEffect, useState } from "react"
//useEffect hooki asosan API larni chaqirishda ishlatilinadi.
const UseEffectHook = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data)
    })
  }, [])
  return (
    <div>
      UseEffectHook
      <div>
        {data.map((item, index) => {
          return <div key={index}> {item.username}</div>
        })}
      </div>
    </div>
  )
}
export default UseEffectHook
