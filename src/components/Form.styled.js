import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgGreen};
`;
export const FormContainer = styled.div`
  width: 100%;
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Subtitle = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.normal};
  text-align: center;
  margin-bottom: 30px;
`;
export const Banano = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;
