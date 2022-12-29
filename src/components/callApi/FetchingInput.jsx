import axios from "axios"
import { useEffect, useState } from "react"

const FetchingInput = () => {
  const [data, setData] = useState({})
  const [id, setId] = useState(1)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts${id}`)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])
  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <div>{data.title}</div>
    </div>
  )
}
export default FetchingInput
