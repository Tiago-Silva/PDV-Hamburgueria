import styled from "styled-components";
import { MdFastfood } from "react-icons/md";

interface Props {
    $background: string;
}

export const Container = styled.div<Props>`
  width: 12vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme, $background }) => theme.colors[$background]};
  gap: 10px;

  cursor: pointer;

  transition: box-shadow 0.8s ease;

  &:active {
    box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.5) inset;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: 1.4vw;
  text-align: center;
`;

export const DefaultIcon = styled(MdFastfood)`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.text_bar};
`;