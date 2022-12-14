import styled, { css } from "styled-components"

export const SectionDescriptionWrapper = styled.article`
    max-width: 626px;

    ${({ skills }) => skills && css`
        max-width: fit-content;
        max-height: 340px;
    `};
`;

export const SectionDescriptionTitle = styled.h2`
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    color: ${({ theme }) => theme.color.secondaryFont};
`;

export const SectionDescriptionParagraph = styled.p`
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
`;