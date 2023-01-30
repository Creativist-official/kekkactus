import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OndaLogo from "../components/OndaLogo";
import Input from "../components/Input";
import Button from "../components/Button";
import ChangePage from "../components/ChangePage";
import { Container, FormContainer, Subtitle, Form, Banano } from "../components/Form.styled";

import bananoImage from "../assets/decorations/banano.png";

const Password = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.fonts.normal};
    text-decoration: none;
    text-align: right;
  }
`;

const Login = () => {
  return (
    <Container>
      <OndaLogo />
      <FormContainer>
        <Subtitle>
          “È il tempo che hai speso per la tua rosa che ha fatto la tua rosa
          così importante”
        </Subtitle>
        <Form>
          <Input placeholder="Indirizzo email" type="email" />
          <Input placeholder="Password" type="password" />
          <Password>
            <Link to={"/recover-password"}>Password dimenticata?</Link>
          </Password>
          <Button type="submit">Login</Button>
        </Form>
        <ChangePage register={false} />
      </FormContainer>
      <Banano src={bananoImage} alt="Mascotte" />
    </Container>
  );
};

export default Login;
