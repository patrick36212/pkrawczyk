import styled, { css } from "styled-components";

export const NavigationWrapper = styled.nav`
    display: flex;
    align-items: center;
    margin: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 100%;
        padding: 10px 0;
        flex-direction: column;
        background-color: whitesmoke;
        transition: all 0.5s ease-in-out; 
        transform: translateY(-100%);

        ${({ openNav }) => openNav && css`
            transform: none;
        `}
    }
`;

export const NavigaionLink = styled.a`
    font-size: 1.5em;
    padding: 0 10px;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        margin-bottom: 10px;
    }

    &:hover {
        border-bottom: 1px solid;
    }

    &:active {
        color: teal;
        border-bottom: 1px solid;
    }
`;