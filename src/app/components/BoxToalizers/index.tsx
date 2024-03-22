import React from 'react';

import {
  Container, 
  Content, 
  Footer, 
  FooterHeader, 
  Header,
  HeaderTitle,
  Icon,
  TitleFooter,
  Total,
  WrapperButtons,
  WrapperTitles
} from './styles';
import { ItemData } from '@/app/interface/ItemData';
import { ItemCard } from '../ItemCard';
import { Buttom } from '../Buttom';
import { useSelector } from 'react-redux';
import { IState } from '@/app/store/modules/cart/types';
import { pedidoservice } from '@/app/services/pedidoService';
import { UserResponseDTO } from '@/app/interface/UserResponseDTO';
import { itemService } from '@/app/services/itemService';

interface Props {
  operatorName: string;
  user: UserResponseDTO;
  handleOrderCancel: () => void;
  handleConfirmOrderIsLoading: (value: boolean) => void;
}

export const BoxToalizers = ({
  operatorName,
  user,
  handleOrderCancel,
  handleConfirmOrderIsLoading
}: Props) => {
  const items = useSelector<IState, ItemData[]>(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.total, 0);

  const handleConfirmOrder = async () => {
    handleConfirmOrderIsLoading(true);
    const order = pedidoservice.creationPedido(
      total,
      user.id,
      'DINHEIRO',
      itemService.converteItemDataToItemRequestDTO(items)
    );

    pedidoservice.save(order);
    handleConfirmOrderIsLoading(false);
  }

  return (
    <Container>

      <Header>

        <WrapperTitles>
          <HeaderTitle>Cliente: {user.nome}</HeaderTitle>
          <HeaderTitle>Operador: {operatorName}</HeaderTitle>
        </WrapperTitles>

        <Icon />

      </Header>

      <Content>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </Content>

      <Footer>
        <FooterHeader>
          <TitleFooter>Total do pedido:</TitleFooter>
          <Total>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(total) }
          </Total>
        </FooterHeader>

        <WrapperButtons>
          <Buttom 
            backgroundColor='#FF872C'
            borderColor='#FF872C'
            isDisabled={true}
            title='Aguardar'
          />
          <Buttom 
            backgroundColor='#E83F5B'
            borderColor='#E83F5B'
            isDisabled={items.length === 0}
            title='Cancelar'
            onClick={handleOrderCancel}
          />
        </WrapperButtons>

        <Buttom 
          backgroundColor='#12A454'
          borderColor='#12A454'
          isDisabled={items.length === 0}
          title='Confirmar pedido'
          onClick={handleConfirmOrder}
        />
      </Footer>

    </Container>
  );
}
