import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from '@iconify/react';

const HeaderContainer = styled.section`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
`;

const GiftNum = styled.span`
    font-size: 35px;
    font-family: ${({theme}) => theme.fonts.special};
    color: ${({theme}) => theme.colors.light};

`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Icon icon="bx:gift" width="40"/>
        <GiftNum>3</GiftNum>
      </div>
      <Icon icon="mdi:bell-badge-outline" width="40"/>
    </HeaderContainer>
  )
}

export default Header;
