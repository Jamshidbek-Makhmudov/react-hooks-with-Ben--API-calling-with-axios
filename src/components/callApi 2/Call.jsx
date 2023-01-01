import { useEffect, useState } from "react"

const Call = () => {
  const [data, setData] = useState([])

  // resieve the data from API
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users")
      console.log(result)
      const jsonResult = await result.json()
      setData(jsonResult)
    }
    fetchData()
  }, [])

  // send data to API

  const sendData = async () => {
    const myData = {
      name: "Jamshid",
      username: "Makhmudov",
      email: "Sincere@april.com",
      address: {
        street: "Kulas Night",
        suite: "Apt. 55",
        city: "Gwenborn",
        zipcode: "92998-3875",
        geo: {
          lat: "-37.3150",
          lng: "81.1495",
        },
      },
    }
    const result = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "Post",
      headers: {
        "Contend-Type": "aplicatiob/json",
      },
      body: JSON.stringify(myData),
    })
    const resultInJson = await result.json()
    setData((prev) => [...prev, resultInJson])
  }
  sendData()

  return (
    <div>
      <div>
        <ul>
          {data.map((item, key) => {
            return <li key={key}>{item.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
export default Call
