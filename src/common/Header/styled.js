import styled from "styled-components";

export const HeaderWrapper = styled.header`
    margin: 10px auto;
    width: 100%;
    display: flex;
    align-items: center;
    background: transparent;
    position: absolute;

    @media(max-width: ${({theme}) => theme.breakpoints.medium}px) {
        margin: 0;
    }
`;