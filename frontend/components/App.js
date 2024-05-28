import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card/Card'
import styled from 'styled-components';
import { API_KEY } from '../../constants'


const AppWrapper = styled.div`
width: 85%;
marginLeft: 7.5%;
padding: 5px
`

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
    <AppWrapper>
      <Card title={apiData.title} url={apiData.url} description={apiData.explanation} mediaType={apiData.media_type} date={apiData.date} />
    </AppWrapper>
  )
}

export default App
