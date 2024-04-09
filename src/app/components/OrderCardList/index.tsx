import React from 'react';
import {Container} from "@/app/components/OrderCardList/styles";
import {StatusOrderCard} from "@/app/components/StatusOrderCard";

const statusOrderCards = [
    { quantidade: 2, title: "Recebidos", background: "title" },
    { quantidade: 2, title: "Aceitos", background: "primary" },
    { quantidade: 2, title: "Cozinha", background: "secondary" },
    { quantidade: 2, title: "Prontos", background: "secondary_light" },
    { quantidade: 2, title: "Enviados", background: "success_light" },
    { quantidade: 2, title: "Finalizados", background: "success" },
    { quantidade: 2, title: "Cancelados", background: "attention" },
];

const OrderCardList = () => {
    return (
        <Container>
            {statusOrderCards.map((statusOrderCard, index) => (
                <StatusOrderCard
                    key={index}
                    quantidade={statusOrderCard.quantidade}
                    title={statusOrderCard.title}
                    background={statusOrderCard.background}
                />
            ))}
        </Container>
    );
};

export default OrderCardList;