import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
    justify-content: left;
    align-items: center;
`;

const Title = ({Title}) => {
  return (
    <TitleContainer>
      <TitlePage>{Title}</TitlePage>
    </TitleContainer>
  )
}

Title.propTypes = {
    Title: PropTypes.string.isRequired,
}

export default Title