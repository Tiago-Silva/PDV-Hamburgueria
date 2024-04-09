import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 2px;
`;

export const Title = styled.h1`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.title};
`;

export const Check = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: ${props => props.theme.colors.shape};
    border: 1px solid ${props => props.theme.colors.shape};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    position: relative;

    &:checked {
        background-color: ${props => props.theme.colors.title};
        opacity: 1;
    }
`;