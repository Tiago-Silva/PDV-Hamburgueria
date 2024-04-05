import { 
  Amount, 
  Container, 
  DefaultIcon, 
  Title, 
} from "./styles";
import React from "react";
import Image from "next/image";

interface Props {
  idproduto: number;
  title: string;
  amount: number;
  urlImage: string;
  descricao: string;
  handleAddItem: () => void;
}

const ProductCardComponent = ({
  idproduto,
  title,
  amount,
  urlImage,
  descricao,
  handleAddItem
}: Props) => {

  return (
    <Container onClick={handleAddItem}>
      {urlImage ?
      
        <Image
          src={urlImage}
          alt={title}
          width={50}
          height={50}
          objectFit="cover"
        />
        :
        <DefaultIcon name='food' />
      }
      
      <Title>{title}</Title>
      <Amount>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(amount) }
      </Amount>
    </Container>
  );
};

ProductCardComponent.displayName = 'ProductCard';

export const ProductCard = React.memo(ProductCardComponent);