import React from 'react'
import styled from 'styled-components'

const PlantContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const RelativeContainer = styled.div`
    position: absolute;
    z-index: 0;
`

const Content = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
`

const InfoCol = styled.div`
    display: flex;
    flex-direction: column;
`

const PlantCol = styled.div`
    display: flex;
    flex-direction: column;
`

const HomePlant = () => {
  return (
    <PlantContainer>
        <RelativeContainer>
            <svg width="321" height="176" viewBox="0 0 321 176" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <span>Cactus</span>
                <h2>Cyntia</h2>
                <button>1/2 tazze</button>
                <span>5 giorni fa</span>
            </InfoCol>
            <PlantCol>
                <h3>Merisiel</h3>
            </PlantCol>
        </Content>
    </PlantContainer>

  )
}

export default HomePlant;
