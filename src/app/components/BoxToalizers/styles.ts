import styled from "styled-components";
import { FaUserFriends } from 'react-icons/fa';

export const Container = styled.div`
  width: 40%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_header};
  padding: 15px;
`;

export const WrapperTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const HeaderTitle = styled.h3`
  font-size: 1.5vw;
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(FaUserFriends)`
  font-size: 4vw;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background_header};
  gap: 16px;
  margin-top: 16px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 16px; */
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.background_header};
  padding: 15px;
`;

export const TitleFooter = styled.h3`
  font-size: 2vw;
  color: ${({ theme }) => theme.colors.shape};
`;

export const FooterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Total = styled.h3`
  font-size: 1.5vw;
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;