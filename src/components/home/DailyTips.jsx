import React from 'react'
import styled from 'styled-components'
import SingleTip from './SingleTip'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 94%;
`

const Title = styled.h2`
  font-family: ${({theme}) => theme.fonts.special};
  font-size: 35px;
  font-weight: 300;
  margin-left: 20px;
`

const TipRow = styled.div`
  margin-top: 20px;
  display: flex;
`

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DailyTips = () => {
  return (
    <Container>
      <Title>Daily Tips</Title>
      <TipRow>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={true} 
          modules={[Pagination]}
        >
          <SwiperSlide>
              <SingleTip image="https://cdn.discordapp.com/attachments/1067888696025677885/1067944960546066432/euphorbia-ingens-cactus-candelabro.png" text="Le rose" />
          </SwiperSlide>
          <SwiperSlide>
            <SingleTip image="https://cdn.discordapp.com/attachments/1067888696025677885/1067944960546066432/euphorbia-ingens-cactus-candelabro.png" text="Le rose" />
          </SwiperSlide>
          <SwiperSlide>
            <SingleTip image="https://cdn.discordapp.com/attachments/1067888696025677885/1067944960546066432/euphorbia-ingens-cactus-candelabro.png" text="Le rose" />
          </SwiperSlide>
        </Swiper>
      </TipRow>
    </Container>
  )
}

export default DailyTips
