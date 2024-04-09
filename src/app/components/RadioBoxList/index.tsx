import React, {useState} from 'react';
import {Container} from "@/app/components/RadioBoxList/styles";
import RadioBox from "../RadioBox";

const statusOrderCards = [
    { quantidade: 2, title: "Recebidos", background: "title" },
    { quantidade: 2, title: "Aceitos", background: "primary" },
    { quantidade: 2, title: "Cozinha", background: "secondary" },
    { quantidade: 2, title: "Prontos", background: "secondary_light" },
    { quantidade: 2, title: "Enviados", background: "success_light" },
    { quantidade: 2, title: "Finalizados", background: "success" },
    { quantidade: 2, title: "Cancelados", background: "attention" },
];

const RadioBoxList = () => {
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <Container>
            {statusOrderCards.map((statusOrderCard, index) => (
                <RadioBox
                    key={index}
                    title={statusOrderCard.title}
                    checked={selectedValue === statusOrderCard.title}
                    onChange={() => setSelectedValue(statusOrderCard.title)}
                />
            ))}
        </Container>
    );
};

export default RadioBoxList;