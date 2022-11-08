import styled, { css } from "styled-components";

export const ThemeSwichBody = styled.span`
    padding: 0 10px;
`;

export const ThemeSwitchButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
`;

export const Info = styled.p`
    margin: 0;
    font-size: 1.5em;
    min-width: 115px;
`;

export const SwitchBody = styled.span`
    width: 51px;
    height: 31px;
    background-color: gray;
    border-radius: 30px;
    display: flex;
    align-items: center;
`;

export const SwitchItem = styled.span`
    display: block;
    border-radius: 50%;
    margin: 2px;
    width: 27px;
    height: 27px;
    background-color: teal;
    transition: all .3s ease-in-out; 

    ${({ active }) => active && css`
        transform: translateX(20px);   
    `}
`;