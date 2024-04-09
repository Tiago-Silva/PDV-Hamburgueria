'use client';

import React, {useEffect, useState} from 'react';
import {Container, Title} from "@/app/(pages)/Delivery/styles";
import StatusOrderCardList from "../../components/StatusOrderCardList";
import OrderCard from "@/app/components/OrderCard";
import {pedidoservice} from "@/app/services/pedidoService";
import {PedidoResponseDTO} from "@/app/interface/PedidoResponseDTO";

const Delivery = () => {
    const [pedidos, setPedidos] = useState<PedidoResponseDTO[]>([]);

    const getPedidosEstablishmentByStatus = async (
        idestabelecimento: number,
        status: string
    ) => {
        try {
            const response = await pedidoservice.getPedidosEstablishmentByStatus(idestabelecimento, status);
            setPedidos(response.data);
            // userData.current = response.data;
            // userDataList.current = response.data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPedidosEstablishmentByStatus(1, 'FINALIZADO');
    }, []);

    return (
        <Container>
            <Title>Delivery - acompanhe os pedidos</Title>

            <StatusOrderCardList />
            {pedidos.map((pedido) => (
                <OrderCard pedido={pedido} key={pedido.idpedido}/>
            ))}
        </Container>
    );
};

export default Delivery;