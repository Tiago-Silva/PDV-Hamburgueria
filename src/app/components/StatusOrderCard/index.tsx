import { 
  Container,
  DefaultIcon, 
  Title, 
} from "./styles";
import React from "react";
import Image from "next/image";

interface Props {
  quantidade: number;
  title: string;
  background: string;
}

const StatusOrderCardComponent = ({
    quantidade,
    title,
    background
}: Props) => {

  return (
    <Container $background={background}>
      <DefaultIcon name='food' />
      <Title>{quantidade}</Title>
      <Title>{title}</Title>
    </Container>
  );
};

StatusOrderCardComponent.displayName = 'StatusOrderCard';

export const StatusOrderCard = React.memo(StatusOrderCardComponent);