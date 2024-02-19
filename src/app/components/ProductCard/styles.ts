import styled from "styled-components";
import { MdFastfood } from "react-icons/md";


export const Container = styled.div`
  width: 12vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.background_card};
  gap: 10px;
  cursor: pointer;
`;

export const Title = styled.h3`
  color: #FFFFFF;
  font-size: 1.4vw;
`;

export const Amount = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4vw;
`;

export const DefaultIcon = styled(MdFastfood)`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.text};
`;