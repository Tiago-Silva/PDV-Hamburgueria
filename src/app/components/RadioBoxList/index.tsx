import React from 'react';
import {Container} from "@/app/components/RadioBoxList/styles";
import RadioBox from "../RadioBox";
import {StatusOrderCardData} from "@/app/interface/StatusOrderCardData";

interface Props {
    idpedido: number;
    status: string;
    statusOrderCards: StatusOrderCardData[];
    handleChangeStatus: (status: string) => void;
}

const RadioBoxList = ({
    idpedido,
    status,
    statusOrderCards,
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