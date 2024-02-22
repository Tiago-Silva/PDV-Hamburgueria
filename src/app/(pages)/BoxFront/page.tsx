'use client';
import React, { useEffect, useState } from 'react';

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
import { pedidoservice } from '@/app/services/pedidoService';
import { useRouter } from 'next/navigation';
import { tokenService } from '@/app/services/tokenService';


export default function BoxFront () {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [items, setItems] = useState<ItemData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  const getProductsByCategory = async (category: string) => {
    setIsLoading(true);

    const tokenData = await tokenService.retrieveTokenData();

    if (!tokenData) {
      alert('Seção expirda, por favor faça login novamente');
      router.push('/');
      throw new Error('Token not found');
    }

    try {
      const response = await productService.getProductsByCategory(tokenData.idestabelecimento, category);
      setProducts(response.data); 
    } finally {
      setIsLoading(false);
    }
  };

  const verifyToken = async () => {
    try {
      const token = await tokenService.getToken();
      if (!token || token === 'undefined' || token.length < 10) {
        router.push('/');
      }

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
    
    setItems(prevItems => {
      const {updatedItems, total} =  itemService.handleUpdateItems(prevItems, item);
      setTotal(total);
      return updatedItems;
    });
  }

  const handleOrderCancel = () => {
    setItems([]);
    setTotal(0);
    setIsLoading(false);
  }

  const handleConfirmOrder = async () => {
    setIsLoading(true);

    const tokenData = await tokenService.retrieveTokenData();

    if (!tokenData) {
      alert('Seção expirda, por favor faça login novamente');
      router.push('/');
      throw new Error('Token not found');
    }

    const order = pedidoservice.creationPedido(
      total,
      tokenData.idUser,
      'DINHEIRO',
      itemService.converteItemDataToItemRequestDTO(items)
    );

    pedidoservice.save(order);
    handleOrderCancel();
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
        itemList={items}
        total={total}
        handleOrderCancel={handleOrderCancel}
        handleConfirmOrder={handleConfirmOrder}
      />
      
    </Container>
  );
}
