import React from 'react'
import styled from 'styled-components';

const Paragraph = styled.p`
text-align: justify;
`


const DescriptionHolder = (props) => {

  const { description } = props  

  return (
    <Paragraph>{description}</Paragraph>
  )
}

export default DescriptionHolder