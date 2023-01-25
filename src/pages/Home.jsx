import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Title from '../components/Title';
import HomePlant from '../components/home/HomePlant';
import DailyTips from '../components/home/DailyTips';

const Content = styled.div`
`;

const SvgWave = styled.svg`
   position: absolute;
   width: 100%;
   top: 50px;
`

const HomeContainer = styled.section`
   height: 100vh;
   width: 100%;
   background-color: ${({theme}) => theme.colors.bgLight}; 
`;

const HeaderContainer = styled.section`
   width: 100%;
   background-color: ${({theme}) => theme.colors.bgGreen};
`

const BushImg = styled.img`
   position: absolute;
   width: 100%;
   bottom: -40px;
`

const RelativeContainer = styled.div`
   position: relative;
   height: 150px;
   width: 100%;
`

const Home = ({}) => {
   return (
      <HomeContainer>
         <HeaderContainer>
            <Header leftIcon="bx:gift" rightIcon='mdi:bell-badge-outline'/>
            <Title Title="Da innaffiare"/>
            <RelativeContainer>
               <BushImg src="./bush.png" alt="" />
               <SvgWave viewBox="0 0 397 120" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M397 9.075C353.5 65 94.8734 -5.36156e-06 0 0V99H397V9.075Z" fill="#FFEEE4"/>
               </SvgWave>
               <HomePlant img="./Immaginepianta.png" type="Cactus" name="Cyntia"/>
            </RelativeContainer>
         </HeaderContainer>
         <Content>
            <DailyTips />
         </Content>

      </HomeContainer>
   )
}

export default Home;

