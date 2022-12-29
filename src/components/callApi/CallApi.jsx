import { useEffect, useState } from "react"
import axios from "axios"

const CallApi = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(setIsLoading(false))
  }, [])

  return (
    <div>
      {count}
      <button onClick={handleClick}>click</button>
      <ul>
        {isLoading ? "loading" : null}
        {data.map((data) => {
          return <li key={data.id}>{data.name}</li>
        })}
      </ul>
    </div>
  )
}
export default CallApi
