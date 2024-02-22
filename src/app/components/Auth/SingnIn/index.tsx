import React, { useState } from 'react';

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
import { useRouter } from 'next/navigation';
import { Loading } from '../../Loading';

export type authData = z.infer<typeof AuthenticationDTO>;

export const SingnIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<authData>({
    resolver: zodResolver(AuthenticationDTO),
    mode: 'onChange'
  });

  const handleSignIn = async (data: authData) => {
    setIsLoading(true);
    try {
      const response = await authService.handleLoginIn(data);
      
      if (response.status !== 200) {
        setIsLoading(false);
        throw new Error('Login ou senha inválidos');
      }
      
      await router.push('/BoxFront');

      setTimeout(() => {
        setIsLoading(false);
      }, 9000);

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <Container>

      {isLoading && <Loading />}

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