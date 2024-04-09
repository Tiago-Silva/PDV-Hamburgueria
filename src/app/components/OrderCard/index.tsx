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
import {PedidoResponseDTO} from "@/app/interface/PedidoResponseDTO";

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

interface Props {
    pedido: PedidoResponseDTO;
}

const OrderCar = ({
    pedido
}: Props) => {
    return (
        <Container>
            <WrapperContentAll>
                <Header>
                    <Title>Client name - nome (ID: {pedido.idpedido})</Title>
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
                                <DetailValue>{pedido.data}</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Hora:</Label>
                                <DetailValue>{pedido.data}</DetailValue>
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
                                <DetailValue>{pedido.total}</DetailValue>
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
                                <DetailValue>{pedido.total}</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                <Label>Forma de pagamento:</Label>
                                <DetailValue>{pedido.tipoPagamento}</DetailValue>
                            </WrapperInfo>
                            <WrapperInfo>
                                    <Label>Troco para:</Label>
                                <DetailValue>R$ 50,00 (Levar R$ 10,00)</DetailValue>
                            </WrapperInfo>
                        </Detail>


                    </WrapperDetails>

                    <Divisor />
                    {pedido.itemsReponseDTO.map((item, index) => (
                        <ItemCard
                            key={index}
                            item={item}
                        />
                    ))}
                </Content>
            </WrapperContentAll>
        </Container>
    );
};

export default OrderCar;