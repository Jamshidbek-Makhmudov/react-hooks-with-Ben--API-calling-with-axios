import axios from "axios"
import { useEffect, useState } from "react"

const Test = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <button>click</button>
      <ul>
        {data.map((item) => {
          return <Guest key={item.id} data={item} />
        })}
      </ul>
    </div>
  )
}
export default Test

const Guest = ({ data }) => {
  return (
    <div>
      <h1> {data.name}</h1>
      <h5>{data.address.street}</h5>
    </div>
  )
}
export { Guest }
