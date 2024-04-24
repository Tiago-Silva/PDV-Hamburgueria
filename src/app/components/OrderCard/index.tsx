import React, {useRef} from 'react';
import {
    Container,
    Content,
    Detail,
    DetailValue, Divisor, Footer,
    Header,
    Label,
    Title, WrapperButton,
    WrapperContentAll,
    WrapperDetails,
    WrapperInfo
} from "@/app/components/OrderCard/styles";
import RadioBoxList from "../RadioBoxList";
import {PedidoResponseDTO} from "@/app/interface/PedidoResponseDTO";
import OrderItemCard from "@/app/components/OrderItemCard";
import {Buttom} from "@/app/components/Buttom";
import {pedidoservice} from "@/app/services/pedidoService";

interface Props {
    pedido: PedidoResponseDTO;
}

const OrderCar = ({
    pedido
}: Props) => {
    const statusRef = useRef(pedido.status);

    const handleUpdateOrder = async () => {
        await pedidoservice.updateStatusPedido(
            pedidoservice.creationPedido(
                pedido.total,
                pedido.iduser,
                pedido.tipoPagamento,
                statusRef.current,
                pedido.type,
                pedido.itemsReponseDTO,
                pedido.idpedido,
                pedido.data,
            )
        );
    };

    const handleChangeStatus = (status: string) => {
        statusRef.current = status;
    }

    return (
        <Container>
            <WrapperContentAll>
                <Header>
                    <Title>Cliente: {pedido.userName} (PEDIDO: {pedido.idpedido})</Title>
                    <RadioBoxList
                        idpedido={pedido.idpedido || 0}
                        status={pedido.status}
                        handleChangeStatus={handleChangeStatus}
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
                            isDisabled={false}
                            onClick={handleUpdateOrder}
                        />
                    </Footer>
                </Content>
            </WrapperContentAll>
        </Container>
    );
};

export default OrderCar;