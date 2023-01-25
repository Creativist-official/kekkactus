import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const HomeContainer = styled.section`
   height: 100vh;
   width: 100%;
   background-color: ${({theme}) => theme.colors.bgGreen}; 
`;

const Home = ({}) => {
   return (
      <HomeContainer>
         <Header />
      </HomeContainer>
   )
}

export default Home;

