'use client';

import React, {useEffect, useState} from 'react';
import {Container, Title} from "@/app/(pages)/Delivery/styles";
import StatusOrderCardList from "../../components/StatusOrderCardList";
import OrderCard from "@/app/components/OrderCard";
import {pedidoservice} from "@/app/services/pedidoService";
import {PedidoResponseDTO} from "@/app/interface/PedidoResponseDTO";
import {PedidoStatusDTO} from "@/app/interface/PedidoStatusDTO";
import {tokenService} from "@/app/services/tokenService";

interface PageDeliveryProps {
    handleIsLoading: (isLoading: boolean) => void;
}

const Delivery = ({
    handleIsLoading
}: PageDeliveryProps) => {
    const [pedidos, setPedidos] = useState<PedidoResponseDTO[]>([]);
    const [pedidoStatus, setPedidoStatus] = useState<PedidoStatusDTO[]>([]);

    const getPedidosEstablishmentByStatus = async (
        idestabelecimento: number,
        status: string
    ) => {
        try {
            const response = await pedidoservice.getPedidosEstablishmentByStatus(idestabelecimento, status);
            setPedidos(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getTotalOrdesByStatus = async (
        idestabelecimento: number
    ) => {
        try {
            const response = await pedidoservice.getTotalOrdesByStatus(idestabelecimento);
            setPedidoStatus(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSelecStatus = (status: string) => {
        getPedidosEstablishmentByStatus(1, status).then(() => {});
    };

    useEffect(() => {
        verifyToken('FINALIZADO');
    }, []);

    const verifyToken = async (status: string) => {
        handleIsLoading(true);
        try {
            const token = await tokenService.retrieveTokenData();
            if (token) {
                getTotalOrdesByStatus(token.idestabelecimento).then(() => {});
                getPedidosEstablishmentByStatus(token.idestabelecimento, status).then(() => {});
            }
        } catch (error) {
            console.log(error);
        } finally {
            handleIsLoading(false);
        }
    };

    const handleUpdateOrder = async (status: string, pedido: PedidoResponseDTO) => {
        handleIsLoading(true);
        await pedidoservice.updateStatusPedido(
            pedidoservice.creationPedido(
                pedido.total,
                pedido.iduser,
                pedido.tipoPagamento,
                status,
                pedido.type,
                pedido.itemsReponseDTO,
                pedido.idpedido,
                pedido.data,
            )
        );
        verifyToken(status);
    }

    return (
        <Container>
            <Title>Delivery - acompanhe os pedidos</Title>

            <StatusOrderCardList
                totalOrdersStatus={pedidoStatus}
                handleSelecStatus={handleSelecStatus}
            />
            {pedidos.map((pedido) => (
                <OrderCard
                    pedido={pedido}
                    key={pedido.idpedido}
                    handleUpdateOrder={(value) => handleUpdateOrder(value, pedido)}
                />
            ))}
        </Container>
    );
};

export default Delivery;