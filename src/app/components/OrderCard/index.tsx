import React from 'react';
import {
    Container,
    Content,
    Detail,
    DetailValue, Divisor,
    Header,
    Label,
    Title,
    WrapperContentAll,
    WrapperDetails,
    WrapperInfo
} from "@/app/components/OrderCard/styles";
import RadioBoxList from "../RadioBoxList";
import {ItemCard} from "@/app/components/ItemCard";
import {ItemData} from "@/app/interface/ItemData";

const item: ItemData = {
    iditem: 1,
    quantidade: 2,
    descricao: 'Lanche geral',
    valor: 15.00,
    total: 30.00,
    idproduto: 10,
    idpedido: 1,
    urlImage: ''
};

const OrderCar = () => {
    return (
        <Container>
            <WrapperContentAll>
                <Header>
                    <Title>Client name - DELIVERY (ID: 7895)</Title>
                    <RadioBoxList />
                </Header>

                <Content>
                    <WrapperDetails>
                        <Detail>
                            <WrapperInfo>
                                <Label>Cliente:</Label>
                                <DetailValue>Roberto Santos</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Data:</Label>
                                <DetailValue>12/03/2024</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Hora:</Label>
                                <DetailValue>20:33:25</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Telefone:</Label>
                                <DetailValue>(77) 99855-6533</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Referência:</Label>
                                <DetailValue>Praça do Jardim</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Bairro:</Label>
                                <DetailValue>Centro</DetailValue>
                            </WrapperInfo>
                        </Detail>

                        <Detail>
                            <WrapperInfo>
                                <Label>Total dos itens:</Label>
                                <DetailValue>R$ 35,00</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Taxa de entrega:</Label>
                                <DetailValue>R$ 5,00</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Desconto:</Label>
                                <DetailValue>R$ 00,00</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Total:</Label>
                                <DetailValue>R$ 40,00</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Forma de pagamento:</Label>
                                <DetailValue>Dinheiro</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                    <Label>Troco para:</Label>
                                <DetailValue>R$ 50,00 (Levar R$ 10,00)</DetailValue>
                            </WrapperInfo>
                        </Detail>


                    </WrapperDetails>

                    <Divisor />

                    <ItemCard
                        item={item}
                    />
                </Content>
            </WrapperContentAll>
        </Container>
    );
};

export default OrderCar;