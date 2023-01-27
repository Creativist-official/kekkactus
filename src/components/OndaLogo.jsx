import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import logo from "../assets/logo.png";
import foglieImage from "../assets/decorations/foglie.png";
import cactusImage from "../assets/decorations/cactus.png";

const ContainerOnda = styled.div`
  position: relative;
  margin-bottom: 80px;
`;

const Logo = styled.img`
  position: absolute;
  bottom: -50px;
  left: calc((100% - 150px)/2);
  width: 150px;
  box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.special};
  text-align: center;
  margin-bottom: 20px;
`;

const Foglie = styled.img`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
`;
const Cactus = styled.img`
  position: absolute;
  top: 80%;
  right: 0;
`;

const OndaLogo = () => {
  return (
    <>
      <ContainerOnda>
        <svg
          viewBox="0 0 390 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M391 127.87C364.593 116.876 68.0682 158.678 -4 113.479V-2H391V127.87Z"
            fill="#FFEEE4"
          />
        </svg>
        <Foglie src={foglieImage} alt="Decorazione" />
        <Cactus src={cactusImage} alt="Decorazione" />
        <Logo src={logo} alt="logo" />
      </ContainerOnda>
      <Title>kekkactus!</Title>
    </>
  );
};

OndaLogo.prototype = {};
export default OndaLogo;
