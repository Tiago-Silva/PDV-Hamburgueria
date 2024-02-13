import styled from "styled-components";
import { MdFastfood } from "react-icons/md";


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_header};

  /* margin-top: 5px; */
  /* padding: 10px; */
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