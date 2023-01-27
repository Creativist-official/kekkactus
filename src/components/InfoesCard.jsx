import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const Container = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-top: 5%;
`;

const SvgDiv = styled.div`
        top: 0;
        position: absolute;
        z-index: 0;
        width: 90%;
`;

const Content = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 5%;
    padding-left: 3%;
    padding-right: 3%;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    `;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    & div {
        display: flex;
        align-items: center;
        flex-grow: 1;
        & p {
            font-family: ${props => props.theme.fonts.normal};
            font-weight: 700;
            font-size: 23px;
            color: ${props => props.theme.colors.light};
            margin-left: 2%;
        }
    }
`;

const Description = styled.div`
    width: 60%;
    font-family: ${props => props.theme.fonts.normal};
    font-weight: 400;
    font-size: 13px;
    color: ${props => props.theme.colors.light};
    margin-top: 3%;
`;

const Calendar = styled(Swiper)`
    margin-top: 5%;
    width: 100%;
`;

const MiniCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 64px;
    padding: 2%;
    border-radius: 7px;
    background-color: ${({theme, status}) => status === "past" ? "#DBDBDB" : status === "yes" ? theme.colors.success : "#E9E9E9"};
`;  

const MiniCardNumber = styled.div`
    font-family: ${props => props.theme.fonts.normal};
    font-weight: 700;
    font-size: 13px;
    color: ${({theme, status}) => status === "yes" ? theme.colors.light : theme.colors.dark};
`;

const MiniCardIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    margin-top: 30%;
    border-radius: 8px;
    font-family: ${props => props.theme.fonts.normal};
    font-weight: 700;
    font-size: 13px;
    border: ${({theme, status}) => status === "past" ? `1px solid ${theme.colors.dark}` : "none"};
    background-color: ${props => props.theme.colors.light};
`;

const days = [
    {
        number: 20,
        day: "S",
        water: "past"
    },
    {
        number: 21,
        day: "S",
        water: "past"
    },
    {
        number: 22,
        day: "S",
        water: "none"
    },
    {
        number: 23,
        day: "S",
        water: "yes"
    },
    {
        number: 24,
        day: "S",
        water: "none"
    },
    {
        number: 25,
        day: "S",
        water: "none"
    },
    {
        number: 26,
        day: "S",
        water: "yes"
    },
    {
        number: 27,
        day: "S",
        water: "none"
    },
    {
        number: 28,
        day: "S",
        water: "none"
    },
    {
        number: 29,
        day: "S",
        water: "yes"
    }
]
const InfoesCard = ({props}) => {
   return   <Container>
                <SvgDiv>
                    <svg viewBox="0 0 345 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 184V6.84489C92.2277 -3.55051 99 -0.0253014 139 3.90009C170.258 6.96759 226.284 4.1969 240.403 6.6268C265.818 11.0007 317.901 7.99994 345 6.84489V179.669C311.98 181.112 244.028 184 236.376 184C226.812 184 184.091 184 157.812 179.669C140.116 176.752 51.0099 181.112 0 184Z" fill="#1B80B2"/>
                    </svg>
                </SvgDiv>
                <Content>
                    <TitleContainer>
                        <Title>
                            <div>
                                <Icon width={26} color="#FFF" icon="material-symbols:calendar-month-rounded" />
                                <p>Innaffiature</p>
                            </div>
                            <Icon width={26} color="#FFF" icon="material-symbols:arrow-forward-ios-rounded" />
                        </Title>
                    </TitleContainer>
                    <Description>
                        Prossima innaffiatura 23/02/2023 Ogni 2-3 giorni (inverno)
                    </Description>
                    <Calendar slidesPerView={7.9} freeMode>

                        {days.map((day, index) => {
                            return <SwiperSlide key={index}>
                            <MiniCard status={day.water}>
                                <MiniCardNumber status={day.water}>
                                    {day.number}
                                </MiniCardNumber>
                                <MiniCardIcon status={day.water}>
                                    {day.water === "none" ? 
                                <Icon width={20} color="#000" icon="material-symbols:water-drop" />
                                : day.day}
                        </MiniCardIcon>
                            </MiniCard>
                            </SwiperSlide>
                        })}
                    </Calendar>
                </Content>
            </Container>
}

export default InfoesCard;