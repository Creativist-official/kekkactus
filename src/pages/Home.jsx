import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Title from '../components/Title';

const Content = styled.div`
`;

const HomeContainer = styled.section`
   height: 100vh;
   width: 100%;
   background-color: ${({theme}) => theme.colors.bgLight}; 
`;

const HeaderContainer = styled.section`
   width: 100%;
   background-color: ${({theme}) => theme.colors.bgGreen};
`

const Home = ({}) => {
   return (
      <HomeContainer>
         <HeaderContainer>
            <Header />
            <Title Title="Da innaffiare"/>
            <svg viewBox="0 0 397 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M397 9.075C353.5 65 94.8734 -5.36156e-06 0 0V99H397V9.075Z" fill="#FFEEE4"/>
            </svg>

         </HeaderContainer>
         <Content>

         </Content>

      </HomeContainer>
   )
}

export default Home;

