'use client';

import React from 'react';
import {Container, Title} from "@/app/(pages)/Delivery/styles";
import StatusOrderCardList from "../../components/StatusOrderCardList";
import OrderCard from "@/app/components/OrderCard";

const Delivery = () => {
    return (
        <Container>
            <Title>Delivery - acompanhe os pedidos</Title>

            <StatusOrderCardList />

            <OrderCard />
        </Container>
    );
};

export default Delivery;