import React from 'react'


const ImageHolder = (props) => {

  const { url, mediaType } = props

  return (
    <>
      {mediaType === "video" ?

        <iframe width="600" height="400"
          src={url}>
        </iframe>
        :
        <img src={url} alt="nasa-image" />

      }
    </>
  )
}

export default ImageHolder