import styled, { css } from "styled-components";

interface PropsLink {
    $isActive: boolean;
}

export const Container = styled.a<PropsLink>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 10px;
    cursor: pointer;

    ${({$isActive}) =>
            $isActive && css`
            border-radius: 5px;
            background-color: ${({ theme }) => theme.colors.secondary_light};
        `
    }
`;

export const LinkMenu = styled.span`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2vw;
`;