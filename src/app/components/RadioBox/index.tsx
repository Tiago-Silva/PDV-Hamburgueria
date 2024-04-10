import React from 'react';
import {Check, Container, Title} from "@/app/components/RadioBox/styles";

interface Props {
    title: string;
    name: string;
    checked: boolean;
    onChange: () => void;
}

const RadioBox = ({
    title,
    name,
    checked,
    onChange
}: Props) => {
    return (
        <Container>
            <Check
                type="radio"
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <Title>{title}</Title>
        </Container>
    );
};

export default RadioBox;