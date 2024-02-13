import React from 'react';

import {
  Container, 
  Icon, 
  Info, 
  InfoValue, 
  Total,
  WrapperInfo
} from './styles';
import { ItemData } from '../../interface/ItemData';

interface Props {
  item: ItemData;
}

export const ItemCard = ({
  item
}: Props) => {
  return (
    <Container >
      <WrapperInfo>
        <Icon />
        <Info>
          <InfoValue>{item.quantidade}  {item.descricao}</InfoValue>
          <InfoValue>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(item.valor) }
          </InfoValue>
        </Info>
      </WrapperInfo>
      <Total>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(item.total) }
      </Total>
    </Container>
  );
}
