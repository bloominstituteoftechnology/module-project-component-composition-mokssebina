import React from 'react'
import styled from 'styled-components';

const Header = styled.h1`
margin-top: 12px;
margin-bottom: 12px;
text-align: center;
`

const TitleHolder = (props) => {

    const { title } = props

  return (
    <Header>{title}</Header>
  )
}

export default TitleHolder