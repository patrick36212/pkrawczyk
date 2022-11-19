import styled, { css } from "styled-components";

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 50vw;

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

export const NavigationLinkWrapper = styled.nav`
    display: flex;
    flex-grow: 1;
    justify-content: center;
`;

export const NavigaionLink = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    padding: 0 10px;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        margin-bottom: 10px;
    }

    &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.color.mainFont};
    }
`;