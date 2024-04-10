import React from 'react';
import {Container} from "@/app/components/StatusOrderCardList/styles";
import {StatusOrderCard} from "@/app/components/StatusOrderCard";

const statusOrderCards = [
    { quantidade: 2, title: "RECEBIDO", background: "title" },
    { quantidade: 2, title: "ACEITO", background: "primary" },
    { quantidade: 2, title: "COZINHA", background: "secondary" },
    { quantidade: 2, title: "PRONTO", background: "secondary_light" },
    { quantidade: 2, title: "ENVIADO", background: "success_light" },
    { quantidade: 2, title: "FINALIZADO", background: "success" },
    { quantidade: 2, title: "CANCELADO", background: "attention" },
];

interface Props {
    handleSelecStatus: (status: string) => void;
}

const StatusOrderCardList = ({
    handleSelecStatus
}: Props) => {
    return (
        <Container>
            {statusOrderCards.map((statusOrderCard, index) => (
                <StatusOrderCard
                    key={index}
                    quantidade={statusOrderCard.quantidade}
                    title={statusOrderCard.title}
                    background={statusOrderCard.background}
                    handleSelecStatus={handleSelecStatus}
                />
            ))}
        </Container>
    );
};

export default StatusOrderCardList;