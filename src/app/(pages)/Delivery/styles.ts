import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-height: 100vh;
    overflow-y: scroll;
`;

export const Title = styled.h1`
    font-size: 34px;
    font-weight: bold;
    color: ${props => props.theme.colors.text_dark};
    margin-top: 20px;
    margin-bottom: 30px;
`;