import styled, { css } from "styled-components";


export const ControlsWrapper = styled.div`
    position: absolute; 
    right: 31px;
    top: 50%;
    display: flex;
    flex-direction: column;
`;

export const StyledControl = styled.a`
    margin: 5px;
    cursor: pointer;
    height: 15px;
    width: 15px;
    background-color: ${({ theme }) => theme.color.mainFont};
    border: 1px solid ${({ theme }) => theme.color.mainBackground};
    border-radius: 50%;
    transition: background-color 0.6s ease;

    &:hover {
        background-color: ${({ theme }) => theme.color.secondaryBacground};
    };

    ${({ active }) => active && css`
        background-color: ${({ theme }) => theme.color.secondaryBacground};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `};
`;