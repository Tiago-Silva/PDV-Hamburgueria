import { 
  Amount, 
  Container, 
  DefaultIcon, 
  Imagem, 
  Title, 
  Total, 
  WrapperIcon
} from "./styles";
import React, { useEffect, useState } from "react";
import { ItemData } from "../../interface/ItemData";
// import { itemService } from '../../services/itemService';

interface Props {
  idproduto: number;
  title: string;
  amount: number;
  urlImage: string;
  descricao: string;
}

export const ProductCard = React.memo (({
  idproduto,
  title,
  amount,
  urlImage,
  descricao
}: Props) => {

  return (
    <Container>
      {urlImage ?
        <Imagem src={urlImage} alt={title} />
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
});