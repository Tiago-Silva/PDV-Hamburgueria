import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
    height: 100vh;
    margin-left: 1.5vw;
    box-sizing: border-box;
`;

export const LeftContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.h3`
    font-size: 2vw;
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const WrapperButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
`;