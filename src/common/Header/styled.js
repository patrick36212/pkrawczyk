import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    max-height: 10vh;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: transparent;
    position: fixed;

    @media(max-width: ${({theme}) => theme.breakpoints.medium}px) {
        max-height: 100vh;
        margin: 0;
    }
`;