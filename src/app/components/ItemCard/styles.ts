import styled from "styled-components";
import { MdFastfood } from "react-icons/md";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background_header};

  /* margin-top: 5px; */
  /* padding: 10px; */
  cursor: pointer;

  transition: box-shadow 0.8s ease;

  &:active {
    box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.5) inset;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
`;

export const Icon = styled(MdFastfood)`
    font-size: 3vw;
    color: ${({ theme }) => theme.colors.text};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoValue = styled.h3`
  font-size: 1vw;
  color: ${({ theme }) => theme.colors.text};
`;

export const Total = styled.h3`
  font-size: 1.5vw;

  color: ${({ theme }) => theme.colors.success};
`;

export const StyledHr = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;