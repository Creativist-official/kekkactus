import React, {useEffect} from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../logic/actions/userSlice";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.user.status);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (status == "success" || token != null) {
      navigate("/");
    }
  }, [status, token]);
  return (
    <Container>
      <OndaLogo />
      <FormContainer>
        <Subtitle>
          “È il tempo che hai speso per la tua rosa che ha fatto la tua rosa
          così importante”
        </Subtitle>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if(status != "loading"){
              dispatch(loginUser({
                email: e.target[0].value,
                password: e.target[1].value,
              }))
            }
          }}
        >
          <Input placeholder="Indirizzo email" type="email" required/>
          <Input placeholder="Password" type="password" required/>
          <Password>
            <Link to={"/recover-password"}>Password dimenticata?</Link>
          </Password>
          <Button type="submit">{status == "loading" ? <Icon icon="line-md:loading-twotone-loop" width={10}/> : "LOGIN"}</Button>
        </Form>
        <ChangePage register={false} />
      </FormContainer>
      <Banano src={bananoImage} alt="Mascotte" />
    </Container>
  );
};

export default Login;
