import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card/Card'


function App() {

  const [apiData, setApiData] = useState()

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=PpXg8JF3ObUCeWird0AyyyxiStfYP8vCPFZp3gmb')
        .then(res => {
          setApiData(res.data)
        })
    }

    fetchData()
  }, [])

  if (!apiData) return "Fetching data!"
  return (
    <section>
      <Card title={apiData.title} url={apiData.url} description={apiData.explanation} mediaType={apiData.media_type} />
      <p>Media dated {apiData.date}</p>
    </section>
  )
}

export default App
