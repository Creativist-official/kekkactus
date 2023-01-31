import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types'

const BgSvg = styled.svg`
    filter: drop-shadow(-2px 5px 0px black) drop-shadow(-5px 1px 0 black)
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`

const AbsoluteContainer = styled.div`
    position: absolute;
    top: 0;
    left: 25px;
`

const Content = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

const PlantImg = styled.img`
    width: 140px;
`

const InfoCol = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    justify-content: space-between;
    gap: 5px;
`

const PlantName = styled.h2`
    font-size: 30px;
    font-weight: 900;
    color: ${({theme}) => theme.colors.textDark};
    font-family: ${({theme}) => theme.fonts.normal};
`

const StatsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Row1 = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
`

const Col1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PlantType = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.textDark};
    font-family: ${({theme}) => theme.fonts.normal};
`

const PlantData = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.textDark};
    font-family: ${({theme}) => theme.fonts.normal};
`

const DataType = styled.h4`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.textDark};
    font-family: ${({theme}) => theme.fonts.normal};
`

const WateredBadge = styled.div`
    width: 133px;
    height: 37px;
    background-color: ${({theme}) => theme.colors.primary};
    position: absolute;
    top: 20px;
    right: 10px;
    transform: rotate(45deg);
`

const WateredText = styled.h4`
    font-size: 15px;
    font-weight: 900;
    color: ${({theme}) => theme.colors.light};
    font-family: ${({theme}) => theme.fonts.normal};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

`

const BadgeContainer = styled.div`
    position: relative;
    bottom: 235px;
    left: 294px;
    width: 138px;
    height: 157px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const SinglePlant = ({watered, name, type, height, age, water, last_water}) => {
  return (
    <Container>
        <AbsoluteContainer>
            <BgSvg width="100vw" viewBox="0 0 345 193" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.161 190.468C87.7665 193.168 30.9758 192.367 0 190.468L0 1.34941C14.4677 8.75467 61.0265 -2.09183 87.9194 1.34941C114.629 4.76721 161.371 13.4953 213.677 4.76721C262.268 -3.34088 260.976 1.34941 296.589 1.34941C317.525 1.34941 337.581 2.10893 345 1.34941L345 190.468C340.548 196.165 315.508 190.468 296.589 190.468C277.669 190.468 231.484 195.274 205.331 190.468C183.629 186.481 126.315 184.772 100.161 190.468Z" fill="#C2DBD7"/>
            </BgSvg>
            {!watered && 
                <BadgeContainer>
                    <WateredBadge>
                        <WateredText>INNAFFIATA</WateredText>
                    </WateredBadge>
                </BadgeContainer>
            }
        </AbsoluteContainer>
        <Content>
            <ImgDiv>
                <PlantImg src="./Immaginepianta.png" alt="pianta bellissima" />
            </ImgDiv>
            <InfoCol>
                <PlantName>{name}</PlantName>
                <PlantType>{type}</PlantType>
                <StatsDiv>
                    <Row1>
                        <Icon width="24" icon="ph:arrows-horizontal-bold" rotate={1} />
                        <Col1>
                            <PlantData>{height}</PlantData>
                            <DataType>Altezza</DataType>
                        </Col1>
                        <Icon width="24" icon="material-symbols:monitor-heart" />
                        <Col1>
                            <PlantData>{age}</PlantData>
                            <DataType>Età</DataType>
                        </Col1>
                    </Row1>
                    <Row1>
                        <Icon width="24" icon="material-symbols:water-drop" />
                        <Col1>
                            <PlantData>{water}</PlantData>
                            <DataType>Acqua usata</DataType>
                        </Col1>
                        <Icon width="24" icon="material-symbols:calendar-today" />
                        <Col1>
                            <PlantData>{last_water}</PlantData>
                            <DataType>Ultima innaffiata</DataType>
                        </Col1>
                    </Row1>
                </StatsDiv>
            </InfoCol>
        </Content>
    </Container>
  )
}

SinglePlant.propTypes = {
    watered: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    height: PropTypes.string,
    age: PropTypes.string,
    water: PropTypes.string,
    last_water: PropTypes.string
}



export default SinglePlant