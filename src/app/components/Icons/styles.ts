import { AiOutlineHome } from 'react-icons/ai';
import { FaBoxTissue } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { BiChevronLeftSquare } from "react-icons/bi";
import { BiChevronRightSquare } from "react-icons/bi";
import styled from "styled-components";


export const HomeIcon = styled(AiOutlineHome)`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text}
`;

export const RightIcon = styled(FiChevronRight)`
    margin-bottom: -10.20vh;
    margin-right: -85%;
    
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.shape}
    
`;

export const BoxIcon = styled(FaBoxTissue)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text}
`;

export const DeliveryIcon = styled(MdDeliveryDining)`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text}
`;

export const Open = styled(BiChevronRightSquare)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text}
`;

export const Close = styled(BiChevronLeftSquare)`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text}
`;