import styled, { css } from "styled-components";


export const ControlsWrapper = styled.div`
    position: absolute;
    margin: 0 10px;
    right: 10px;
    top: 50%;
    display: flex;
    flex-direction: column;
`;

export const StyledControl = styled.span`
    margin: 3px;
    cursor: pointer;
    height: 15px;
    width: 15px;
    background-color: whitesmoke;
    border: 1px solid gray;
    border-radius: 50%;
    transition: background-color 0.6s ease;

    &:hover {
        background-color: gray;
    }

    ${({ active }) => active && css`
        background-color: gray;
    `}
`;