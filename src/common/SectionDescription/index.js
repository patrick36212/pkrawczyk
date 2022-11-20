import React from "react";
import { SectionDescriptionParagraph, SectionDescriptionTitle, SectionDescriptionWrapper } from "./styled";

const SectionDescription = ({ sectionDescription, sectionTitle, additionalContent, skills }) => {
    return (
        <SectionDescriptionWrapper
            skills={skills}
        >
            <SectionDescriptionTitle>{sectionTitle}</SectionDescriptionTitle>
            <SectionDescriptionParagraph>{sectionDescription}</SectionDescriptionParagraph>
            {additionalContent}
        </SectionDescriptionWrapper>
    );
};

export default SectionDescription;