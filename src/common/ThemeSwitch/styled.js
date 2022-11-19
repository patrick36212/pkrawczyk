import styled, { css } from "styled-components";

export const ThemeSwichBody = styled.span`
    padding: 0 10px;
`;

export const ThemeSwitchButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;
`;

export const Info = styled.p`
    margin: 0;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 15px;
    font-weight: 700;
    min-width: 115px;
`;

export const SwitchBody = styled.span`
    width: 51px;
    height: 31px;
    background-color: ${({ theme }) => theme.color.mainFont};
    border-radius: 31px;
    display: flex;
    align-items: center;
`;

export const SwitchItem = styled.span`
    display: block;
    border-radius: 50%;
    margin: 2px;
    width: 27px;
    height: 27px;
    background-color: ${({ theme }) => theme.color.mainBackground};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 3px 1px rgba(0, 0, 0, 0.06);
    transition: all .3s ease-in-out;

    ${({ active }) => active && css`
        transform: translateX(20px);   
    `}
`;