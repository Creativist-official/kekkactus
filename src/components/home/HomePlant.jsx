import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';

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

const HomePlant = ({type, name, img}) => {
  return (
    <PlantContainer>
        <RelativeContainer>
            <svg width="100%" viewBox="0 0 321 176" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_185_383)">
            <path d="M101 2.20861C90.2 -1.79139 31.8333 0.54194 4 2.20861V168.209C17 161.709 58.5 160.709 82.5 165.209C106.5 169.709 152 162.209 196 165.209C240 168.209 247 164.209 270.5 165.209C289.3 166.009 307.333 167.542 314 168.209V2.20861C310 -2.7914 243 7.20862 226 7.20862C221 7.20862 171.751 4.8302 158.5 7.20862C139 10.7086 114.5 7.20861 101 2.20861Z" fill="#D5DBC2"/>
            </g>
            <defs>
            <filter id="filter0_dd_185_383" x="0" y="0" width="321" height="175.209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-4" dy="7"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_185_383"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="7" dy="5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_185_383" result="effect2_dropShadow_185_383"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_185_383" result="shape"/>
            </filter>
            </defs>
            </svg>
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

export default HomePlant;
