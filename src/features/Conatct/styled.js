import styled, { css } from "styled-components";
import { ReactComponent as Github } from "./Github.svg";
import { ReactComponent as LinkedIn } from "./LinkedIn.svg"
import { ReactComponent as ContactImg } from "./Contact.svg";

export const ContactSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50vw);
    justify-items: center;
    align-items: center;
    overflow: hidden;
`;

export const ContactLinksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const ContactLink = styled.a`
    margin: 28px 0 14px 0;
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.secondaryFont};

    ${({ mail }) => mail && css`
        width: 100%;
    `};
`;

export const GithubIcon = styled(Github)`
    width: 48px;
    margin-right: 24px;
    fill: ${({ theme }) => theme.color.secondaryFont};
`;

export const LinkedInIcon = styled(LinkedIn)`
    width: 48px;
    fill: ${({ theme }) => theme.color.secondaryFont};
`;

export const ContactImage = styled(ContactImg)`
    width: 270px;
    height: 300px;
    stroke: ${({ theme }) => theme.color.secondaryFont};
`;