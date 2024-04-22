import styled, { css } from "styled-components";


interface SidBarProps {
    $isShow: boolean;
}

export const Container = styled.aside<SidBarProps>`
    display: flex;
    flex-direction: column;
    width: 10vw;
    max-width: 10vw;
    height: 100vh;
    
    position: absolute;
    z-index: 2;
    left: 0;
    
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    
    background-color: ${({ theme }) => theme.colors.sidebar};
    
    transition: width 0.5s ease-in-out;
    
    ${({ $isShow }) =>
        !$isShow && css`
            width: 2.5vw;
        `
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    
    padding: 10px;
    gap: 10px;

    border-top-right-radius: 15px;
    
    background-color: ${({ theme }) => theme.colors.background_header};
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    //justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    
    gap: 20px;
`;

export const WrapperIconClose = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;
