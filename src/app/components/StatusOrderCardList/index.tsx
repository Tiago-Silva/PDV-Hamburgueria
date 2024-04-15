import React from 'react';
import {Container} from "@/app/components/StatusOrderCardList/styles";
import {StatusOrderCard} from "@/app/components/StatusOrderCard";
import {PedidoStatusDTO} from "@/app/interface/PedidoStatusDTO";

interface Props {
    totalOrdersStatus: PedidoStatusDTO[];
    handleSelecStatus: (status: string) => void;
}

const StatusOrderCardList = ({
    totalOrdersStatus,
    handleSelecStatus
}: Props) => {
    return (
        <Container>
            {totalOrdersStatus.map((statusOrderCard, index) => (
                <StatusOrderCard
                    key={index}
                    quantidade={statusOrderCard.total}
                    title={statusOrderCard.title}
                    background={statusOrderCard.background}
                    handleSelecStatus={handleSelecStatus}
                />
            ))}
        </Container>
    );
};

export default StatusOrderCardList;