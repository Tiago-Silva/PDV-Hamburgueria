import styled from "styled-components";
import { FaUserFriends } from 'react-icons/fa';
import React from "react";

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
  font-size: 1.2vw;
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapperSelect = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Select = styled.select`
  appearance: none;
  width: 100%;
  background: transparent;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  color: ${({ theme }) => theme.colors.text};
  padding-left: 5px;
  font-size: 1.2vw;
  border: none;
  margin-left: 10px;
`;

export const Option = styled.option<React.HTMLAttributes<HTMLOptionElement>>`
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
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

  overflow-y: auto;
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