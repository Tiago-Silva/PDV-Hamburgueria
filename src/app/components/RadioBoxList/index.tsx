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
}

const RadioBoxList = ({
    idpedido,
    status
  }: Props) => {
    const [selectedValue, setSelectedValue] = useState(status);

    return (
        <Container>
            {statusOrderCards.map((statusOrderCard, index) => (
                <RadioBox
                    key={index}
                    title={statusOrderCard.title + 'S'}
                    name={idpedido.toString()}
                    checked={selectedValue === statusOrderCard.title}
                    onChange={() => setSelectedValue(statusOrderCard.title)}
                />
            ))}
        </Container>
    );
};

export default RadioBoxList;