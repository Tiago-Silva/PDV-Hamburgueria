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
import { useAppDispatch } from '@/app/store/modules/hooks';
import { reduceItemFromCart } from '@/app/store/modules/cart/actions';

interface Props {
  item: ItemData;
}

export const ItemCard = ({
  item
}: Props) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    // console.log('remove item');
    dispatch(reduceItemFromCart(item));
  };

  return (
    <Container onClick={handleRemoveItem}>
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
