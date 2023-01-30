import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '@iconify/react';

const TitlePage = styled.h1`
    font-size: 36px;
    font-family: ${({theme}) => theme.fonts.special};
    color: ${({theme}) => theme.colors.light};
    text-align: center;
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
    font-weight: 300;
`;

const TitleContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: ${icon => icon ? "space-between" : "left"};
    align-items: center;

`;

const IconContainer = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
`

const Title = ({Title, icon}) => {
  return (
    <TitleContainer>
      <TitlePage>{Title}</TitlePage>
      {icon && 
      <IconContainer>
        <Icon icon="material-symbols:category-outline" width="30" color="white"/>
      </IconContainer>
      }
    </TitleContainer>
  )
}

Title.propTypes = {
    Title: PropTypes.string.isRequired,
}

export default Title