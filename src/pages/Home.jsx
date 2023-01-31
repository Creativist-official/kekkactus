import React, {useEffect} from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Title from '../components/Title';
import HomePlant from '../components/home/HomePlant';
import DailyTips from '../components/home/DailyTips';
import Navbar from '../components/Navbar';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const PlantSwiper = styled(Swiper)`
   height: 200px;
   width: 100%;
`

const Home = ({}) => {
   const navigate = useNavigate();
   const token = useSelector((state) => state.user.token);

   useEffect(() => {
      if(!token) {
         navigate('/login');
      }
   }, [token, navigate]);

   return (
      <HomeContainer>
         <HeaderContainer>
            <Header leftIcon="bx:gift" rightIcon='mdi:bell-badge-outline' doubleSet={false} num={3}/>
            <Title Title="Da innaffiare"/>
            <RelativeContainer>
               <BushImg src="./bush.png" alt="" />
               <SvgWave viewBox="0 0 397 120" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M397 9.075C353.5 65 94.8734 -5.36156e-06 0 0V99H397V9.075Z" fill="#FFEEE4"/>
               </SvgWave>
               <PlantSwiper
                  slidesPerView={1}
                  spaceBetween={10}
               >
                  <SwiperSlide>
                     <HomePlant img="./Immaginepianta.png" type="Basilico" name="Cyntia"/>
                  </SwiperSlide>
                  <SwiperSlide>
                     <HomePlant img="https://media.discordapp.net/attachments/1067888696025677885/1068073214238015518/d6n8zrc-c8af5c6d-3ab6-4124-b63e-ab6bb72538c8.png?width=239&height=589" type="Cactus" name="Down"/>
                  </SwiperSlide>
               </PlantSwiper>
            </RelativeContainer>
         </HeaderContainer>
         <Content>
            <DailyTips />
         </Content>
         <Navbar />
      </HomeContainer>
   )
}

export default Home;

