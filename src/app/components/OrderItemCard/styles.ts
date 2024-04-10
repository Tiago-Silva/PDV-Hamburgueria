import styled from "styled-components";
import { SlArrowUp } from "react-icons/sl";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;

    height: 40px;
    width: 70%;

    background-color: ${props => props.theme.colors.text_bar};
`;

export const Title = styled.h1`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.title};
`;

export const ButtonIcon = styled.button`
    //appearance: none;
    //border: none;
    all: unset;
    
    cursor: pointer;
`;

export const IconHeader = styled(SlArrowUp)`
    font-size: 20px;
    color: ${props => props.theme.colors.title};
`;

export const WrapperItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;