import { 
  Container,
  DefaultIcon, 
  Title, 
} from "./styles";
import React from "react";

interface Props {
  quantidade: number;
  title: string;
  background: string;
  handleSelecStatus: (status: string) => void;
}

const StatusOrderCardComponent = ({
    quantidade,
    title,
    background,
    handleSelecStatus
}: Props) => {

  return (
    <Container $background={background} onClick={() => handleSelecStatus(title)}>
      <DefaultIcon name='food' />
      <Title>{quantidade}</Title>
      <Title>{title}</Title>
    </Container>
  );
};

StatusOrderCardComponent.displayName = 'StatusOrderCard';

export const StatusOrderCard = React.memo(StatusOrderCardComponent);