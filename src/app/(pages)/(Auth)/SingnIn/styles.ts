import styled from "styled-components";



export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }:any) => theme.colors.shape};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 20px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 400px;
  width: 400px;

  padding: 20px;
  gap: 20px;

  border-radius: 20px;

  background-color: ${({ theme }:any) => theme.colors.background_header};
`;

export const InputSignIn = styled.input`
  align-items: center;

  width: 100%;
  height: 2rem;

  padding: 10px;

  border: 1px solid ${({ theme }:any) => theme.colors.shape};
  border-radius: 5px;
  box-shadow: none;

  background-color: ${({ theme }:any) => theme.colors.shape};
`;

export const ButtonSigin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2rem;
  background-color: #8EC5FC;
  border-color: #8EC5FC;

  border-radius: 5px;

  padding: 5px 15px;

  cursor: pointer;
`;

export const ErrorInfo = styled.p`
  margin-top: -17px;
  color: red;
  font-size: 0.7rem;
`;