import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import OndaLogo from "../components/OndaLogo";
import Input from "../components/Input";
import Button from "../components/Button";
import ChangePage from "../components/ChangePage";
import {
  Container,
  FormContainer,
  Subtitle,
  Form,
  Banano,
} from "../components/Form.styled";

import bananoImage from "../assets/decorations/banano.png";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Register = () => {
  return (
    <Container>
      <OndaLogo />
      <FormContainer>
        <Subtitle>
          Entra nel mondo delle piante! Osservale e curale in modo perfetto
        </Subtitle>
        <Form>
          <Flex>
            <Input placeholder="Nome" type="text" />
            <Input placeholder="Cognome" type="text" />
          </Flex>
          <Input placeholder="Indirizzo email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button type="submit">Registrati</Button>
        </Form>
        <ChangePage register={true} />
      </FormContainer>
      <Banano src={bananoImage} alt="Mascotte" />
    </Container>
  );
};

export default Register;
