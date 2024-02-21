import styled from "styled-components";
import { FaWindowClose, FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa';

export const Container = styled.header`
  background-color: ${({ theme }:any) => theme.colors.background_header};
`;

export const WrapperBasicIcons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TitlebarButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  &:hover {
    background: #3c414a;
  }
`;

export const Minimize = styled(FaWindowMinimize)`
  color: #7b68ee;
`;

export const Maximize = styled(FaWindowMaximize)`
  color: #7b68ee;
`;

export const Close = styled(FaWindowClose)`
  color: #7b68ee;
`;