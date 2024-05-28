import React from 'react'
import styled from 'styled-components';


const Paragraph = styled.p`
text-align: justify;
`

const DateHolder = (props) => {
  
  const {date} = props  
  return (
    <Paragraph>Media dated {date}</Paragraph>
  )
}

export default DateHolder