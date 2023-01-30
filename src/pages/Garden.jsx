import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Header from '../components/Header'
import SinglePlant from '../components/garden/SinglePlant'

const Container = styled.div`
  background-color: ${({theme}) => theme.colors.bgLight};
  overflow-x: hidden;
  overflow: hidden;
`

const HeaderContainer = styled.div`
    background-color: ${({theme}) => theme.colors.bgGreen};
`

const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
`

const SvgWave = styled.svg`
   position: absolute;
   width: 100%;
   bottom: -1px;
`

const TitleContainer = styled.div`
  padding-bottom: 12px;
`

const Garden = () => {
  return (
    <Container>
        <HeaderContainer>
          <RelativeContainer>
            <Header leftIcon="bx:gift" rightIcon='mdi:bell-badge-outline' doubleSet={false}/>
            <TitleContainer>
              <Title Title="Le mie piante" icon={true}/>
            </TitleContainer>
            <SvgWave width="100%" viewBox="0 0 390 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M390 0C338.5 29 92.5 15 0 17.5V29H390V0Z" fill="#FFEEE4"/>
            </SvgWave>
          </RelativeContainer>
        </HeaderContainer>
        <SinglePlant />
    </Container>
  )
}

export default Garden
