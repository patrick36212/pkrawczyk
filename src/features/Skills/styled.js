import styled from "styled-components";

export const SkillsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 17px 30px;
    padding: 0;
`;

export const SkillsListItem = styled.li`
    padding: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    list-style-type: none;
`;