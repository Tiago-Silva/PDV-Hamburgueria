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

interface Props {
  itemList: ItemData[];
  total: number;
  handleOrderCancel: () => void;
}

export const BoxToalizers = ({
  itemList,
  total,
  handleOrderCancel
}: Props) => {
  return (
    <Container>

      <Header>

        <WrapperTitles>
          <HeaderTitle>Cliente: Cliente final</HeaderTitle>
          <HeaderTitle>Operador: Alonsão</HeaderTitle>
        </WrapperTitles>

        <Icon />

      </Header>

      <Content>
        {itemList.map((item, index) => (
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
            isDisabled={itemList.length === 0}
            title='Aguardar'
          />
          <Buttom 
            backgroundColor='#E83F5B'
            borderColor='#E83F5B'
            isDisabled={itemList.length === 0}
            title='Cancelar'
            onClick={handleOrderCancel}
          />
        </WrapperButtons>

        <Buttom 
          backgroundColor='#12A454'
          borderColor='#12A454'
          isDisabled={itemList.length === 0}
          title='Confirmar pedido'
        />
      </Footer>

    </Container>
  );
}
