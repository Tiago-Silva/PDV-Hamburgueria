'use client';
import React, { useEffect, useRef, useState } from 'react';

import {
  Container, 
  Content, 
  LeftContainer, 
  Title,
  WrapperButtons, 
} from './styles';
import { ItemData } from '@/app/interface/ItemData';
import { Buttom } from '@/app/components/Buttom';
import { BoxToalizers } from '@/app/components/BoxToalizers';
import { ProductCard } from '@/app/components/ProductCard';
import { ProductData } from '@/app/interface/ProductData';
import { productService } from '@/app/services/productService';
import { Loading } from '@/app/components/Loading';
import { itemService } from '@/app/services/itemService';
import { useRouter } from 'next/navigation';
import { tokenService } from '@/app/services/tokenService';
import { TokenData } from '@/app/interface/tokenData';
import { userService } from '@/app/services/userService';
import { UserResponseDTO } from '@/app/interface/UserResponseDTO';
import { useAppDispatch } from '@/app/store/modules/hooks';
import { addItemToCart, clearCart } from '@/app/store/modules/cart/actions';
import {PedidoResponseDTO} from "@/app/interface/PedidoResponseDTO";


export default function BoxFront () {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const tokenData = useRef<TokenData>({} as TokenData);
  const userData = useRef<UserResponseDTO>({} as UserResponseDTO);
  const userDataList = useRef<UserResponseDTO[]>([] as UserResponseDTO[]);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getProductsByCategory = async (category: string) => {
    setIsLoading(true);

    if (!tokenData) {
      alert('Seção expirda, por favor faça login novamente');
      router.push('/');
      throw new Error('Token not found');
    }

    try {
      const response = await productService.getProductsByCategory(tokenData.current.idestabelecimento, category);
      setProducts(response.data); 
    } finally {
      setIsLoading(false);
    }
  };

  const getClients = async (
      idestabelecimento: number,
      type: string
  ) => {
    try {
      const response = await userService.getClientsByType(idestabelecimento, type);
      // userData.current = response.data;
      userDataList.current = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const verifyToken = async () => {
    try {
      const token = await tokenService.retrieveTokenData();
      if (!token) {
        router.push('/');
        throw new Error('Token not found');
      }

      tokenData.current = token;

      getClients(tokenData.current.idestabelecimento, 'MOBILLE');
      getProductsByCategory('snacks');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  const handleGetProductsByCategory = (category: string) => {
    if (!category) {
      throw new Error('Category is required');
    }
    getProductsByCategory(category);
  }

  const handleAddItem = async (product: ProductData) => {

    if (!product) {
      throw new Error('Product not found');
    }

    const item: ItemData = itemService.creationItem(
      1,
      product.nome,
      product.valor,
      product.valor,
      product.idproduto,
      product.urlImage
    );
    
    dispatch(addItemToCart(item));
  }

  const handleOrderCancel = () => {
    dispatch(clearCart());
    setIsLoading(false);
  }

  const handleConfirmOrder = async (value: boolean) => {
    setIsLoading(value);

    if (!tokenData) {
      alert('Seção expirda, por favor faça login novamente');
      router.push('/');
      throw new Error('Token not found');
    }

    if (!value) dispatch(clearCart());
  }

  const handlePedidoResponseDTO = (response: PedidoResponseDTO) => {
    response.items.map((item) => {
      dispatch(addItemToCart(item));
    })
  }

  return (
    <Container>

      {isLoading && <Loading />}

      <LeftContainer>
        <Title>Localize um produto abaixo:</Title>
        <WrapperButtons>
          <Buttom 
              backgroundColor='#FF872C'
              borderColor='#FF872C'
              isDisabled={false}
              title='Lanches'
              onClick={() => handleGetProductsByCategory('snacks')}
          />
          <Buttom 
              backgroundColor='#FF872C'
              borderColor='#FF872C'
              isDisabled={false}
              title='Bebidas'
              onClick={() => handleGetProductsByCategory('drinks')}
          />
          <Buttom 
              backgroundColor='#FF872C'
              borderColor='#FF872C'
              isDisabled={false}
              title='Milk shake'
              onClick={() => handleGetProductsByCategory('milks')}
          />
        </WrapperButtons>

        <Content>

          {products.map((product, index) => (
            <ProductCard key={index}
              amount={product.valor}
              descricao={product.descricao}
              idproduto={product.idproduto}
              title={product.nome}
              urlImage={product.urlImage}
              handleAddItem={() => handleAddItem(product)}
            />
          ))}
          
        </Content>

      </LeftContainer>

      <BoxToalizers 
        handleOrderCancel={handleOrderCancel}
        handleConfirmOrderIsLoading={handleConfirmOrder}
        operatorName={tokenData.current.username}
        userList={userDataList.current}
        handlePedidoResponseDTO={handlePedidoResponseDTO}
      />
      
    </Container>
  );
}
