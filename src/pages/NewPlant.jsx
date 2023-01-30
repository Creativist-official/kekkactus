import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Input from '../components/Input'
import { Icon } from '@iconify/react';
import Button from '../components/Button'
import DataList from "../components/DataList";


const Container = styled.div`
    background-color: ${({theme}) => theme.colors.bgGreen};
    height: 100vh;
`

const ContainerTitle = styled.div`
    padding: 0 30px;
`

const Datas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
`

const Data = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Label = styled.h3`
    font-family: ${({theme}) => theme.fonts.normal};
    font-size: 26px;
    color: ${({theme}) => theme.colors.light};
`

const PhotoSvg = styled.svg`

`

const RelativeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
`

const AbsoluteIcon = styled.div`
    position: absolute;
`


const NewPlant = () => {
  return (
    <Container>
        <Header leftIcon="bx:gift" rightIcon='mdi:bell-badge-outline' doubleSet={false}/>
        <Navbar/>
        <ContainerTitle>
            <Title Title="AGGIUNGI PIANTA"/>
        </ContainerTitle>
        <Datas>
            <RelativeContainer>
                <PhotoSvg width="244" height="138" viewBox="0 0 244 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M70.8387 136.216C52.5 136.216 21.9075 137.554 0 136.216L0 2.95087C10.2323 8.16908 43.0068 2.95082 62.1806 2.95087C75.5 2.9509 82.3774 -2.90843 130 2.95087C156 6.14981 184.574 2.95087 209.761 2.95087C224.568 2.95087 238.753 3.48607 244 2.95087L244 136.216C240.852 140.23 223.142 136.216 209.761 136.216C196.381 136.216 157.997 139.602 139.5 136.216C104.281 129.768 100.5 136.216 70.8387 136.216Z" fill="#FFEEE4"/>
                </PhotoSvg>
                <AbsoluteIcon>
                    <Icon icon="material-symbols:photo-camera-back" color="orange" width="55" />
                </AbsoluteIcon>
            </RelativeContainer>

            <Data>
                <Label>Nickname</Label>
                <Input placeholder="Tipo" type="text"/>
            </Data>
            <Data>
                <Label>Tipo</Label>
                <DataList placeholder="tipo"/>
            </Data>
            <Data>
                <Label>Nascita</Label>
                <DataList placeholder="Data di nascita"/>
            </Data>
            <Button children="Aggiungi"/>
        </Datas>
    </Container>
  )
}

export default NewPlant
