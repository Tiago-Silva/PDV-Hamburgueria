import React from 'react';

import {
  Container, 
  Content, 
  Icon, 
  Info, 
  InfoValue, 
  StyledHr, 
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
      <Content>
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
      </Content>
      <StyledHr />
    </Container>
  );
}
