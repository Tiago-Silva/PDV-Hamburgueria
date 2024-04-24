import React, {useState} from 'react';
import {Container} from "@/app/components/RadioBoxList/styles";
import RadioBox from "../RadioBox";

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
    idpedido: number;
    status: string;
    handleChangeStatus: (status: string) => void;
}

const RadioBoxList = ({
    idpedido,
    status,
    handleChangeStatus
  }: Props) => {
    const [selectedValue, setSelectedValue] = useState(status);

    const handleSelectStatus = (status: string) => {
        setSelectedValue(status);
        handleChangeStatus(status);
    }

    return (
        <Container>
            {statusOrderCards.map((statusOrderCard, index) => (
                <RadioBox
                    key={index}
                    title={statusOrderCard.title}
                    name={idpedido.toString()}
                    checked={selectedValue === statusOrderCard.title}
                    onChange={() => handleSelectStatus(statusOrderCard.title)}
                />
            ))}
        </Container>
    );
};

export default RadioBoxList;