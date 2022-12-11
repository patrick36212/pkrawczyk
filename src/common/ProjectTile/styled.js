import styled from "styled-components";


export const ProjectTileWrapper = styled.div`
    width: 590px;
    height: 322px;
    border: 6px solid ${({ theme }) => theme.color.secondaryBacground};
    padding: 56px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    transition: .7s;

    &:hover {
        transform: scale(1.02);
        background-color: ${({ theme }) => theme.color.darkerSecondaryBackground};
    }
`;

export const ProjectTitle = styled.h3`
    margin: 0;
    font-size: 24px;
    font-weight: 700;
`;

export const ProjectDesctiption = styled.p`
    margin: 24px 0;
    font-size: 18px;
    font-weight: 400;
    text-align: justify;
`;

export const ProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 8px;
`;

export const ProjectLinkAnnotation = styled.span`
    font-size: 18px;
    font-weight: 400;
`;

export const ProjectLink = styled.a`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.mainFont};
    text-decoration: none;
    transition: .7s;

    &:hover {
        transform: scale(1.02);
        color: ${({ theme }) => theme.color.secondaryFont};
    }
`;