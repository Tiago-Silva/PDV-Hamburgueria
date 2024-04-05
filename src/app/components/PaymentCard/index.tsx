import React from "react";
import { 
  Container, 
  IconCredit, 
  IconMoney, 
  IconPix, 
  TouchIcon, 
} from "./styles";

interface Props {
  paymentType: string;
  handlePaymentType: (paymentType: string) => void;
}

export const PaymentCard = React.memo (({
  paymentType,
  handlePaymentType
}: Props) => {
  return (
    <Container>
      <TouchIcon
        onClick={() => handlePaymentType('DINHEIRO')}
        $isSelected={paymentType === 'DINHEIRO'}
      >
        <IconMoney />
      </TouchIcon>
      <TouchIcon
        onClick={() => handlePaymentType('CREDITO')}
        $isSelected={paymentType === 'CREDITO'}
      >
        <IconCredit/>
      </TouchIcon>
      <TouchIcon
        onClick={() => handlePaymentType('PIX')}
        $isSelected={paymentType === 'PIX'}
      >
        <IconPix />
      </TouchIcon>
    </Container>
  );
});