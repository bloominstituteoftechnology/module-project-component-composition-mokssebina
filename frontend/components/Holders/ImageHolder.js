import React from 'react'
import styled from 'styled-components';


const IFrameHolder = styled.div`
position: relative;
overflow: hidden;
width: 60%;
margin-left: 20%;
margin-bottom: 20px;
aspect-ratio: 16 / 9
`

const Video = styled.iframe`
position: relative;
width: 100%;
height: 100%;
`

const Image = styled.img`
position: relative;
width: 100%;
height: 100;
`

const ImageHolder = (props) => {

  const { url, mediaType } = props

  return (
    <IFrameHolder>

      {mediaType === "video" ?

        <Video src={url} />
        :
        <Image src={url} />

      }
    </IFrameHolder>

  )
}

export default ImageHolder