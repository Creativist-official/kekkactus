import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../utils/useWindowDimensions";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Nunito", sans-serif;
  padding: 0 30px;
  text-align: center;
`;

const OnlyMobile = ({ children }) => {
  let { width } = useWindowDimensions();

  return width < 425 ? (
    children
  ) : (
    <Container>
      <h1>
        Questa applicazione funziona <u>solo su mobile</u>
      </h1>
      <h2>Ancora per poco (si spera) 😉</h2>
    </Container>
  );
};

export default OnlyMobile;
