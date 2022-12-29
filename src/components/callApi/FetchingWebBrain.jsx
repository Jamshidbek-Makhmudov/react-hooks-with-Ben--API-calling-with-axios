import { useEffect, useState } from "react"
const { REACT_APP_BASE_URL: url } = process.env
const FetchingWebBrain = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
  }, [])
  return (
    <div>
      <ul>
        {data.map((value) => {
          return <li key={value.id}>{value.address}</li>
        })}
      </ul>
    </div>
  )
}
export default FetchingWebBrain
