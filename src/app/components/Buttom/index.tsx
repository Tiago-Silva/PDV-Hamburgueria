import { 
  Container, 
  Title } 
from "./styles";
import React from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  borderColor: string;
  backgroundColor: string;
  isDisabled: boolean;
}

export const Buttom = React.memo (({
  title,
  borderColor,
  backgroundColor,
  isDisabled,
  ...rest
}: Props) => {
  return (
    <Container
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
      $isDisabled={isDisabled}
      disabled={isDisabled}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
});