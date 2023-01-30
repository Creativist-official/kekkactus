import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: ${({theme}) => theme.colors.bgLight};
    border-radius: 10px;

    input {
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 10px;
        padding: 0 20px;
        font-family: ${({theme}) => theme.fonts.normal};
        font-size: 18px;
        color: ${({theme}) => theme.colors.dark};
        font-weight: 700;
    }
`
const DataList = ({placeholder}) => {
  return (
    <InputContainer>
        <input placeholder={placeholder} list="lista" id="lista_piante" name="lista_piante"/>

        <datalist id="lista">
            <option value="Cactus"/>
            <option value="Ombrello"/>
            <option value="Mint"/>
            <option value="Strawberry"/>
            <option value="Tronco"/>
        </datalist>
    </InputContainer>
  )
}

export default DataList