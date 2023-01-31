import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types'

const PlantContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const RelativeContainer = styled.div`
    position: absolute;
    z-index: 0;
    width: 87%;
`

const Content = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
`

const InfoCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
`

const PlantCol = styled.div`
    display: flex;
    flex-direction: column;
`

const PlantImg = styled.img`
    width: 110px;
    height: 180px;
`

const CupButton = styled.button`
    background-color: ${({theme}) => theme.colors.success};
    border: none;
    border-radius: 10px;
    color: ${({theme}) => theme.colors.bgGreen};
    padding: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: ${({theme}) => theme.fonts.normal};
    font-weight: 800;
    font-size: 15px;
`

const PlantName = styled.h2`
    font-family: ${({theme}) => theme.fonts.normal};
    font-size: 35px;
    font-weight: 800;
`

const PlantType = styled.span`
    font-family: ${({theme}) => theme.fonts.normal};
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.gray};
`

const WaterTime = styled.span`
    font-family: ${({theme}) => theme.fonts.normal};
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.colors.gray};
    font-weight: 600;
    
`

const SvgContainer = styled.svg`
    filter: drop-shadow(-2px 5px 0px black) drop-shadow(-5px 1px 0 black)
`

const HomePlant = ({type, name, img}) => {
  return (
    <PlantContainer>
        <RelativeContainer>
            <SvgContainer width="100%" viewBox="0 0 310 169" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M97 2.20861C86.2 -1.79139 27.8333 0.54194 0 2.20861V168.209C13 161.709 54.5 160.709 78.5 165.209C102.5 169.709 148 162.209 192 165.209C236 168.209 243 164.209 266.5 165.209C285.3 166.009 303.333 167.542 310 168.209V2.20861C306 -2.7914 239 7.20862 222 7.20862C217 7.20862 167.751 4.8302 154.5 7.20862C135 10.7086 110.5 7.20861 97 2.20861Z" fill="#D5DBC2"/>
            </SvgContainer>
        </RelativeContainer>
        <Content>
            <InfoCol>
                <div>
                    <PlantType>{type}</PlantType>
                    <PlantName>{name}</PlantName>
                    <CupButton> <Icon icon="mdi:cup-full" width="25"/> 1/2 tazze</CupButton>
                </div>
                <WaterTime> <Icon icon="mdi:clock-time-two-outline" width="20" /> 5 giorni fa</WaterTime>
            </InfoCol>
            <PlantCol>
                <PlantImg src={img} alt="" />
            </PlantCol>
        </Content>
    </PlantContainer>

  )
}

HomePlant.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}



export default HomePlant;
