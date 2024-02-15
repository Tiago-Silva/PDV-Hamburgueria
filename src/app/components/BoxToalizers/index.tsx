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
}

export const BoxToalizers = ({
  itemList
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
          <Total>R$ 114,00</Total>
        </FooterHeader>

        <WrapperButtons>
          <Buttom 
            backgroundColor='#FF872C'
            borderColor='#FF872C'
            isDisabled={false}
            title='Aguardar'
          />
          <Buttom 
            backgroundColor='#E83F5B'
            borderColor='#E83F5B'
            isDisabled={false}
            title='Cancelar'
          />
        </WrapperButtons>

        <Buttom 
            backgroundColor='#12A454'
            borderColor='#12A454'
            isDisabled={false}
            title='Confirmar pedido'
          />
      </Footer>

    </Container>
  );
}
