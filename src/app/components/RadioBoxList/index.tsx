import React from 'react';
import {Container} from "@/app/components/RadioBoxList/styles";
import RadioBox from "../RadioBox";

const statusOrderCards = [
    { quantidade: 0, title: "RECEBIDO", background: "title" },
    { quantidade: 0, title: "PREPARADO", background: "primary" },
    { quantidade: 0, title: "PRONTO", background: "secondary" },
    { quantidade: 0, title: "ENVIADO", background: "secondary_light" },
    { quantidade: 0, title: "ENTREGUE", background: "success_light" },
    { quantidade: 0, title: "CANCELADO", background: "success" },
    { quantidade: 0, title: "FINALIZADO", background: "attention" },
];

interface Props {
    idpedido: number;
    status: string;
    handleChangeStatus: (status: string) => void;
}

const RadioBoxList = ({
    idpedido,
    status,
    handleChangeStatus
  }: Props) => {
    const handleSelectStatus = (status: string) => {
        handleChangeStatus(status);
    }

    return (
        <Container>
            {statusOrderCards.map((statusOrderCard, index) => (
                <RadioBox
                    key={index}
                    title={statusOrderCard.title}
                    name={idpedido.toString()}
                    checked={status === statusOrderCard.title}
                    onChange={() => handleSelectStatus(statusOrderCard.title)}
                />
            ))}
        </Container>
    );
};

export default RadioBoxList;