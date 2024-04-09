import React from 'react';
import {Check, Container, Title} from "@/app/components/CheckBox/styles";

interface Props {
    title: string;
}

const CheckBox = ({
    title
}: Props) => {
    return (
        <Container>
            <Check type="checkbox" />
            <Title>{title}</Title>
        </Container>
    );
};

export default CheckBox;