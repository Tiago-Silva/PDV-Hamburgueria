import React, {useState} from 'react';
import {
    Container,
    Content,
    Detail,
    DetailValue, Divisor, Footer,
    Header,
    Label,
    Title,
    WrapperContentAll,
    WrapperDetails,
    WrapperInfo
} from "@/app/components/OrderCard/styles";
import RadioBoxList from "../RadioBoxList";
import {PedidoResponseDTO} from "@/app/interface/PedidoResponseDTO";
import OrderItemCard from "@/app/components/OrderItemCard";
import {Buttom} from "@/app/components/Buttom";

const statusOrderCards = [
    { title: "RECEBIDO", background: "text" },
    { title: "PREPARADO", background: "secondary" },
    { title: "PRONTO", background: "secondary_light" },
    { title: "ENVIADO", background: "success_light" },
    { title: "ENTREGUE", background: "primary" },
    { title: "CANCELADO", background: "attention" },
    { title: "FINALIZADO", background: "success" },
];

interface Props {
    pedido: PedidoResponseDTO;
    handleUpdateOrder: (status: string) => void;
}

const OrderCar = ({
    pedido,
    handleUpdateOrder
}: Props) => {
    const [status, setStatus] = useState(pedido.status);

    const handleUpdate = async () => {
        handleUpdateOrder(status);
    };

    const getBackgroundColor = (status: string) => {
        const statusCard = statusOrderCards.find(card => card.title === status);
        return statusCard ? statusCard.background : 'sidebar';
    };

    return (
        <Container>
            <WrapperContentAll>
                <Header $background={getBackgroundColor(pedido.status)}>
                    <Title>Cliente: {pedido.userName} (PEDIDO: {pedido.idpedido})</Title>
                    <RadioBoxList
                        idpedido={pedido.idpedido || 0}
                        status={status}
                        statusOrderCards={statusOrderCards}
                        handleChangeStatus={setStatus}
                    />
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

                    <Footer>
                        <OrderItemCard
                            idpedido={pedido.idpedido || 0}
                        />
                        <Buttom
                            title='Alterar'
                            borderColor='#FF872C'
                            backgroundColor='#FF872C'
                            isDisabled={status === pedido.status}
                            onClick={handleUpdate}
                        />
                    </Footer>
                </Content>
            </WrapperContentAll>
        </Container>
    );
};

export default OrderCar;