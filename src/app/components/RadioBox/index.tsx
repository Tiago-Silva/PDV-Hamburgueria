import React from 'react';
import {Check, Container, Title} from "@/app/components/RadioBox/styles";

interface Props {
    title: string;
    checked: boolean;
    onChange: () => void;
}

const RadioBox = ({
    title,
    checked,
    onChange
}: Props) => {
    return (
        <Container>
            <Check
                type="radio"
                name="radioBox"
                checked={checked}
                onChange={onChange}
            />
            <Title>{title}</Title>
        </Container>
    );
};

export default RadioBox;