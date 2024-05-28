import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card/Card'
import { API_KEY } from '../../constants'


function App() {

  const [apiData, setApiData] = useState()

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
          setApiData(res.data)
        })
    }

    fetchData()
  }, [])

  if (!apiData) return "Fetching data!"
  return (
    <section>
      <Card title={apiData.title} url={apiData.url} description={apiData.explanation} mediaType={apiData.media_type} date={apiData.date} />
    </section>
  )
}

export default App
