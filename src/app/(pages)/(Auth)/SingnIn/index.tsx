import React from 'react';

import {
  ButtonSigin,
  Container, 
  ErrorInfo, 
  FormLogin, 
  InputSignIn, 
} from './styles';

import { useForm } from "react-hook-form";
import { z } from 'zod';
import { AuthenticationDTO } from '@/app/interface/AuthenticationDTO';
import { authService } from '@/app/services/authService';
import { zodResolver } from '@hookform/resolvers/zod';

export type authData = z.infer<typeof AuthenticationDTO>;

export const SingnIn = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<authData>({
    resolver: zodResolver(AuthenticationDTO),
    mode: 'onChange'
  });

  const handleSignIn = async (data: authData) => {
    const response = await authService.handleLoginIn(data);
    console.log(response);
  }

  return (
    <Container>

      <FormLogin onSubmit={handleSubmit(handleSignIn)}>

        <InputSignIn 
          type="text" 
          placeholder="Login"
          {...register("login")}
        />
        {errors?.login && <ErrorInfo>{errors.login.message}</ErrorInfo>}

        <InputSignIn 
          type="password" 
          placeholder="Senha"
          {...register("password")}
        />
        {errors?.password && <ErrorInfo>{errors.password.message}</ErrorInfo>}

        <ButtonSigin
          type='submit'
          disabled={!isValid}
        >
          Entrar
        </ButtonSigin>

      </FormLogin>

    </Container>
  );
}