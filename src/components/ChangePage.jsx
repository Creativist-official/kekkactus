import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChangePageS = styled(Link)`
    margin-top: 30px;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.fonts.normal};
    text-decoration: none;
    text-align: center;
    line-height: 1.2;

    b {
        font-weight: 600;
        display: block;
    }
`;

const ChangePage = ({ register }) => {
  return (
    <ChangePageS to={!register ? "/register" : "/login"}>
      {register ? (
        <>
          Sei già dei nostri? <b>Entra</b>
        </>
      ) : (
        <>
          Non hai un account? <b>Crealo adesso</b>
        </>
      )}
    </ChangePageS>
  );
};

export default ChangePage;
