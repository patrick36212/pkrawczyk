import styled from "styled-components";

export const BurgerButton = styled.button`
    display: none;

    @media(max-width: ${({thme}) => thme.breakpoints.medium}px){
        display: block;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 32px;
        height: 32px;
        background: black;
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
      transform: ${({ active }) => active ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      transform: ${({ active }) => active ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`;
