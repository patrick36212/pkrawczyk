import styled from "styled-components";

export const BurgerButton = styled.button`
    display: none;

    @media(max-width: ${({theme}) => theme.breakpoints.medium}px){
        display: block;
        position: absolute;
        top: 10px;
        right: 10px; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 32px;
        height: 32px;
        padding: 0;
        background: transparent;
        border: none;
    }
`;

export const BurgerBody = styled.div`
    width: 32px;
    height: 4px;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ active }) => active ? 'rotate(30deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      transform: ${({ active }) => active ? 'rotate(-30deg)' : 'rotate(0)'};
    }
`;
