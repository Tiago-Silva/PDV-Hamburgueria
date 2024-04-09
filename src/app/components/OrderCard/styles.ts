import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    
    width: 100%;
`;

export const WrapperContentAll = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    
    height: 40px;
    
    background-color: ${props => props.theme.colors.background_header};
`;

export const Title = styled.h1`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.title};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    //height: 100px;
    
    padding: 20px;
    
    background-color: ${props => props.theme.colors.shape};
    
    //border: 1px solid ${props => props.theme.colors.shape};
`;

export const WrapperDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    width: 70%;
    padding: 0 20px 0 20px;
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 10px;
`;

export const WrapperInfo = styled.div`
    display: flex;
    flex-direction: row;
    
    gap: 4px;
`;

export const Label = styled.h3`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.text_dark};
`;

export const DetailValue = styled.h3`
    font-size: 14px;
    color: ${props => props.theme.colors.text_bar};
`;

export const Divisor = styled.hr`
    border: 1px solid ${props => props.theme.colors.text_bar};
    width: 100%;
    
    margin: 20px 0 20px 0; 
`;

export const ContentItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    
    background-color: ${props => props.theme.colors.background_card};
`;