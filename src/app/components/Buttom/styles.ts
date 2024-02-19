import styled from "styled-components";

interface Props {
  $borderColor: string;
  $backgroundColor: string;
  $isDisabled: boolean;
}

export const Container = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  /* border-radius: 20px; */
  border: 1px solid ${(props) => props.$borderColor};
  background-color:${(props) => props.$backgroundColor};
  padding: 5px 15px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  flex: 1;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const Title = styled.h3`
  color: ${({ theme }:any) => theme.colors.shape};
  font-size: 1.4vw;
  font-weight: 700;
`;