import React from 'react'
import TitleHolder from '../Holders/TitleHolder'
import DescriptionHolder from '../Holders/DescriptionHolder'
import ImageHolder from '../Holders/ImageHolder'

const Card = (props) => {

    const { title, description, url, mediaType } = props

    return (
        <div className='card'>
            <TitleHolder title={title} />
            <DescriptionHolder description={description} />
            <ImageHolder url={url} mediaType={mediaType} />
        </div>
    )
}

export default Card