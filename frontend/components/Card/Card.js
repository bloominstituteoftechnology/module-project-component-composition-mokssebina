import React from 'react'
import TitleHolder from '../Holders/TitleHolder'
import DescriptionHolder from '../Holders/DescriptionHolder'
import ImageHolder from '../Holders/ImageHolder'
import DateHolder from '../Holders/DateHolder'
import styled from 'styled-components';


const CardHolder = styled.div`
width: 100%;
`
const Card = (props) => {

    const { title, description, url, mediaType, date } = props

    return (
        <CardHolder>
            <TitleHolder title={title} />
            <DescriptionHolder description={description} />
            <ImageHolder url={url} mediaType={mediaType} />
            <DateHolder date={date} />
        </CardHolder>
    )
}

export default Card