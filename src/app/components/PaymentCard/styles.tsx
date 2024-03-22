import { FaMoneyBillWave, FaRegCreditCard } from 'react-icons/fa';
import { FaPix } from "react-icons/fa6";
import styled, { css } from "styled-components";

interface WrapperIconProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const TouchIcon = styled.button<WrapperIconProps>`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; 
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.text_bar};

  cursor: pointer;

  transition: background-color 0.3s ease-in-out;
  
  ${({ isSelected }: WrapperIconProps) => 
    isSelected && css`
      background-color: ${({ theme }) => theme.colors.text};
    ` 
  };
`;

export const IconMoney = styled(FaMoneyBillWave)`
  font-size: 40px;
`;

export const IconPix = styled(FaPix)`
  font-size: 40px;
`;

export const IconCredit = styled(FaRegCreditCard)`
  font-size: 40px;
`;