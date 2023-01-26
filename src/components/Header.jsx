import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types'


const HeaderContainer = styled.section`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
`;

const GiftNum = styled.span`
    font-size: 25px;
    font-family: ${({theme}) => theme.fonts.special};
    color: ${({theme}) => theme.colors.light};
`;

const GiftDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = ({leftIcon, rightIcon, doubleSet, duobleIconRight}) => {
  return (
    <HeaderContainer>
      <GiftDiv>
        <Icon icon={leftIcon} color="white" width="35"/>
        <GiftNum>3</GiftNum>
      </GiftDiv>
      <div>
        {doubleSet && <Icon icon={duobleIconRight} color="white" width="35"/>}
        <Icon icon={rightIcon} color="white" width="35"/>
      </div>
    </HeaderContainer>
  )
}

Header.propTypes = {
    leftIcon: PropTypes.string.isRequired,
    rightIcon: PropTypes.string.isRequired,
    doubleSet: PropTypes.bool,
}

export default Header;
