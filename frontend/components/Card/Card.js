import React from 'react'
import TitleHolder from '../Holders/TitleHolder'
import DescriptionHolder from '../Holders/DescriptionHolder'
import ImageHolder from '../Holders/ImageHolder'
import DateHolder from '../Holders/DateHolder'

const Card = (props) => {

    const { title, description, url, mediaType, date } = props

    return (
        <div className='card'>
            <TitleHolder title={title} />
            <DescriptionHolder description={description} />
            <ImageHolder url={url} mediaType={mediaType} />
            <DateHolder date={date} />
        </div>
    )
}

export default Card