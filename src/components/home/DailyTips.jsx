import React from 'react'
import styled from 'styled-components'
import SingleTip from './SingleTip'

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 94%;
  margin-left: auto;
`

const Title = styled.h2`
  font-family: ${({theme}) => theme.fonts.special};
  font-size: 35px;
  font-weight: 300;
`

const TipRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const DailyTips = () => {
  return (
    <Container>
      <Title>Daily Tips</Title>
      <TipRow>
        <SingleTip />
        <SingleTip />
        <SingleTip />
        <SingleTip />
      </TipRow>
    </Container>
  )
}

export default DailyTips
