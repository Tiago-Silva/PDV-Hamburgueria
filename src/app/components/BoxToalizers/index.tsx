import React, { useRef, useState } from 'react';

import {
  Container, 
  Content, 
  Footer, 
  FooterHeader, 
  Header,
  HeaderTitle,
  Icon,
  Option,
  Select,
  TitleFooter,
  Total,
  WrapperButtons,
  WrapperSelect,
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
import { PaymentCard } from '../PaymentCard';
import {PedidoResponseDTO} from "@/app/interface/PedidoResponseDTO";

interface Props {
  operatorName: string;
  userList: UserResponseDTO[];
  handleOrderCancel: () => void;
  handleConfirmOrderIsLoading: (value: boolean) => void;
  handlePedidoResponseDTO: (PedidoResponseDTO) => void;
}

const mesas = [
  'mesa-01', 
  'mesa-02',
  'mesa-03',
  'mesa-04',
  'mesa-05',
  'mesa-06',
  'mesa-07',
  'mesa-08',
  'mesa-09',
  'mesa-10',
];

export const BoxToalizers = ({
  operatorName,
  userList,
  handleOrderCancel,
  handleConfirmOrderIsLoading,
  handlePedidoResponseDTO
}: Props) => {
  const items = useSelector<IState, ItemData[]>(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.total, 0);
  const [paymentType, setPaymentType] = useState('PIX');
  const mesaRef = useRef('');
  const userRef = useRef<UserResponseDTO>({} as UserResponseDTO);

  const handleConfirmOrder = async (status: string) => {
    if (!userRef.current.id) {
        alert('Selecione um cliente');
        return;
    }
    handleConfirmOrderIsLoading(true);
    const order = pedidoservice.creationPedido(
      total,
      userRef.current.id,
      paymentType,
        status,
      itemService.converteItemDataToItemRequestDTO(items)
    );

    pedidoservice.save(order);
    handleConfirmOrderIsLoading(false);
  }

  const handleSelectUser = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    userRef.current =
        userList.find(
            user => user.id === event.target.value
        ) as UserResponseDTO;
    const response =
        await pedidoservice.getPedidoPendenteByIdUser(userRef.current.id);

    console.log(JSON.stringify(response.data));
    handlePedidoResponseDTO(response.data);
  }

  return (
    <Container>

      <Header>

        <WrapperTitles>
          <HeaderTitle>Operador: {operatorName}</HeaderTitle>
          {/*<HeaderTitle>Cliente: {user.nome}</HeaderTitle>*/}
          <WrapperSelect>
            <HeaderTitle>Cliente: </HeaderTitle>
            <Select
              defaultValue={''}
              onChange={handleSelectUser}
            >
              <Option value="">Selecione o cliente</Option>
              {userList && userList.map((user) => (
                <Option key={user.id} value={user.id}>
                  {user.nome + ' - ' + user.telefone}
                </Option>
              ))}
            </Select>
          </WrapperSelect>
          <WrapperSelect>
            <HeaderTitle>Mesa: </HeaderTitle>
            <Select 
              defaultValue='' 
              onChange={
                (e) => mesaRef.current = e.target.value
              }
            >
              <Option value="">Nehuma mesa selecionada</Option>
              {mesas.map((mesa, index) => (
                <Option key={index} value={mesa}>
                  {mesa}
                </Option>
              ))}
            </Select>
          </WrapperSelect>
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
            isDisabled={items.length === 0}
            title='Aguardar'
            onClick={() => handleConfirmOrder('PENDENTE')}
          />
          <Buttom 
            backgroundColor='#E83F5B'
            borderColor='#E83F5B'
            isDisabled={items.length === 0}
            title='Cancelar'
            onClick={handleOrderCancel}
          />
        </WrapperButtons>

        <PaymentCard 
          paymentType={paymentType}
          handlePaymentType={setPaymentType}
        />

        <Buttom 
          backgroundColor='#12A454'
          borderColor='#12A454'
          isDisabled={items.length === 0}
          title='Confirmar pedido'
          onClick={() => handleConfirmOrder('FINALIZADO')}
        />
      </Footer>

    </Container>
  );
}
