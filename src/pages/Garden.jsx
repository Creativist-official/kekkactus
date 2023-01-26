import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Header from '../components/Header'

const Container = styled.div``

const HeaderContainer = styled.div`
    background-color: ${({theme}) => theme.colors.bgGreen};
`

const Garden = () => {
  return (
    <Container>
        <HeaderContainer>
            <Header leftIcon="bx:gift" rightIcon='mdi:bell-badge-outline' doubleSet={false}/>
            <Title Title="Garden" icon={true}/>
        </HeaderContainer>
        <h1>Titolone</h1>
    </Container>
  )
}

export default Garden
