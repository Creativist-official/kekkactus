import React from 'react'
import styled from 'styled-components'
import SingleTip from './SingleTip'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 100%;
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

const TipsSwiper = styled(Swiper)`
  width: 100%;
`

const DailyTips = () => {
  return (
    <Container>
      <Title>Daily Tips</Title>
      <TipRow>
        <TipsSwiper
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          slidesOffsetAfter={20}
          slidesOffsetBefore={20}
        >
          <SwiperSlide>
              <SingleTip image="https://cdn.discordapp.com/attachments/1067888696025677885/1067944960546066432/euphorbia-ingens-cactus-candelabro.png" text="Le viole"/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleTip image="https://cdn.discordapp.com/attachments/1067888696025677885/1067947250229186631/roselline-rosa-ramificate-fioraio-rimini-14727888568401_1200x1200_crop_center.png" text="Le roselline"/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleTip image="https://cdn.discordapp.com/attachments/1067888696025677885/1067947681026150440/PTG-12st-rose-equador-fucsia-50cm-part2-700x700.png" text="Le rose"/>
          </SwiperSlide>
          <SwiperSlide>
              <SingleTip image="https://cdn.discordapp.com/attachments/1067888696025677885/1067947985511653437/61yscoSoaIL.png" text="basilico"/>
          </SwiperSlide>
        </TipsSwiper>
      </TipRow>
    </Container>
  )
}

export default DailyTips
