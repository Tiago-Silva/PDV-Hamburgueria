import styled from "styled-components";
import { MdFastfood } from "react-icons/md";
import Image from "next/image";


export const Container = styled.div`
  width: 12vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.background_card};
  /* margin-top: 20px; */
  /* margin-right: 20px; */
  gap: 10px;
`;

export const Imagem = styled(Image)`
  width: 50%;
  height: 50%;
  flex-shrink: 0;
`;

export const WrapperIcon = styled.button`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: -7%;
  right: -10%;
`;

export const Total = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4vw;
  font-weight: 700;
  right: 60%;
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