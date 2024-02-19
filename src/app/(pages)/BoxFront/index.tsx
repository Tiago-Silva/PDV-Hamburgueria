import React, { useEffect, useState } from 'react';

import {
  Container, 
  Content, 
  LeftContainer, 
  Title,
  WrapperButtons, 
} from './styles';
import { StyledSelect } from '@/app/components/StyledSelect';
import { ItemData } from '@/app/interface/ItemData';
import { Buttom } from '@/app/components/Buttom';
import { BoxToalizers } from '@/app/components/BoxToalizers';
import { ProductCard } from '@/app/components/ProductCard';
import { ProductData } from '@/app/interface/ProductData';
import { productService } from '@/app/services/productService';
import { Loading } from '@/app/components/Loading';
import { itemService } from '@/app/services/itemService';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'panqueca', label: 'Panqueca' },
  { value: 'churros', label: 'Churros' },
  { value: 'lanche', label: 'Lanche' }
];

const itemList: ItemData[] = [
  {
    iditem: 1,
    quantidade: 2,
    descricao: 'Colorado',
    valor: 25.00,
    total: 50.00,
    idproduto: 1,
    idpedido: 1,
    urlImage: ''
  },
  {
    iditem: 2,
    quantidade: 2,
    descricao: 'Chicago',
    valor: 17.00,
    total: 34.00,
    idproduto: 2,
    idpedido: 1,
    urlImage: ''
  },
  {
    iditem: 3,
    quantidade: 2,
    descricao: 'Miami',
    valor: 15.00,
    total: 30.00,
    idproduto: 3,
    idpedido: 1,
    urlImage: ''
  },
];

const productList: ProductData[] = [
  {
    idproduto: 1,
    nome: 'Chicago',
    descricao: 'Hamburguer gourmer',
    valor: 17.50,
    categoria: 'snacks',
    status: true,
    urlImage: '',
    enablePromotions: false,
    idestabelecimento: 1
  },
  {
    idproduto: 2,
    nome: 'Colorado',
    descricao: 'Cerveja artesanal',
    valor: 25.00,
    categoria: 'bebidas',
    status: true,
    urlImage: '',
    enablePromotions: false,
    idestabelecimento: 1
  },
  {
    idproduto: 3,
    nome: 'Miami',
    descricao: 'Milk shake',
    valor: 15.00,
    categoria: 'sobremesas',
    status: true,
    urlImage: '',
    enablePromotions: false,
    idestabelecimento: 1
  },
  {
    idproduto: 4,
    nome: 'Panqueca',
    descricao: 'Panqueca de frango',
    valor: 20.00,
    categoria: 'sobremesas',
    status: true,
    urlImage: '',
    enablePromotions: false,
    idestabelecimento: 1
  },
  {
    idproduto: 5,
    nome: 'Churros',
    descricao: 'Churros com doce de leite',
    valor: 10.00,
    categoria: 'sobremesas',
    status: true,
    urlImage: '',
    enablePromotions: false,
    idestabelecimento: 1
  },
  {
    idproduto: 6,
    nome: 'Chocolate',
    descricao: 'Sorvete de chocolate',
    valor: 12.00,
    categoria: 'sobremesas',
    status: true,
    urlImage: '',
    enablePromotions: false,
    idestabelecimento: 1
  },
  {
    idproduto: 7,
    nome: 'Vanilla',
    descricao: 'Sorvete de baunilha',
    valor: 12.00,
    categoria: 'sobremesas',
    status: true,
    urlImage: '',
    enablePromotions: false,
    idestabelecimento: 1
  },
  {
    idproduto: 8,
    nome: 'Strawberry',
    descricao: 'Sorvete de morango',
    valor: 12.00,
    categoria: 'sobremesas',
    status: true,
    urlImage: '',
    enablePromotions: false,
    idestabelecimento: 1
  }
]

export const BoxFront = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [items, setItems] = useState<ItemData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    // const product = products.find(product => product.idproduto === idproduto);

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
      return itemService.handleUpdateItems(prevItems, item);
    });
  }

  return (
    <Container>

      {isLoading && <Loading />}

      <LeftContainer>
        <Title>Localize um produto abaixo:</Title>
        <StyledSelect options={options} />
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
      />
      
    </Container>
  );
}
