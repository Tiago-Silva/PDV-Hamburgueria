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


export const BoxFront = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [items, setItems] = useState<ItemData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const getProductsByCategory = async (category: string) => {
    setIsLoading(true);
    try {
      const response = await productService.getProductsByCategory(1, category);
      setProducts(response.data); 
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsByCategory('snacks');
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

  const handleConfirmOrder = () => {
    setIsLoading(true);
    const order = pedidoservice.creationPedido(
      total,
      'd65eee8c-2f87-4d5f-86df-173d5e09f30e',
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
