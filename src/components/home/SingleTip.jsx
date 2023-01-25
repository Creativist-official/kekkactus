import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-bottom: 30px;

`

const TipDescription = styled.p`
    font-family: ${({theme}) => theme.fonts.normal};
    font-size: 14px;
    font-weight: 800;
    margin: 0 auto;
    text-align: center;
    width: 70%;
`

const TipImg = styled.img`
    width: 80px;
    border-radius: 50%;
    border: 3px solid ${({theme}) => theme.colors.dark};
    padding: 3px;
`

const SingleTip = ({text, image}) => {
  return (
    <Container>
        <TipImg src={image} alt="tip image" />
        <TipDescription>{text}</TipDescription>
    </Container>
  )
}

export default SingleTip
