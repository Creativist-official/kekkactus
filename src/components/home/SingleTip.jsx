import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

`

const TipDescription = styled.p`
    font-family: ${({theme}) => theme.fonts.normal};
    font-size: 16px;
    font-weight: 800;
    margin: 0 auto;
    text-align: center;
    width: 50%;
`

const TipImg = styled.img`
    width: 80px;
    border-radius: 50%;
    border: 3px solid ${({theme}) => theme.colors.dark};
    padding: 3px;
`

const SingleTip = () => {
  return (
    <Container>
        <TipImg src="./icon-144x144.png" alt="" />
        <TipDescription>Cacca di mucca fermentata</TipDescription>
    </Container>
  )
}

export default SingleTip
