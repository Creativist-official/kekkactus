import React, {useState, useEffect} from "react";
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
import { loginUser, registerUser } from "../logic/actions/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.user.status);
  const token = useSelector((state) => state.user.token);
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    if (status == "success" && token == null) {
      dispatch(loginUser({
        type: "login",
        ...credentials
      }));
    }else if(token != null){
      navigate("/");
    }
  }, [status]);

  return (
    <Container>
      <OndaLogo />
      <FormContainer>
        <Subtitle>
          Entra nel mondo delle piante! Osservale e curale in modo perfetto
        </Subtitle>
        <Form onSubmit={(e) => {
            e.preventDefault();
            if(status != "loading"){
              dispatch(registerUser({
                type: "register",
                name: e.target[0].value,
                surname: e.target[1].value,
                email: e.target[2].value,
                password: e.target[3].value,
              }))
              setCredentials({
                email: e.target[2].value,
                password: e.target[3].value,
              })
            }
          }}>
          <Flex>
            <Input placeholder="Nome" type="text" />
            <Input placeholder="Cognome" type="text" />
          </Flex>
          <Input placeholder="Indirizzo email" type="email" autocomplete="off"/>
          <Input placeholder="Password" type="password" autocomplete="off"/>
          <Button type="submit">{status == "loading" ? <Icon icon="line-md:loading-twotone-loop" width={10}/> : "Registrati"}</Button>
        </Form>
        <ChangePage register={true} />
      </FormContainer>
      <Banano src={bananoImage} alt="Mascotte" />
    </Container>
  );
};

export default Register;
