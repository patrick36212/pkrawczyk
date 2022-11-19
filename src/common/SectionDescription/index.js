import React from "react";
import { SectionDescriptionParagraph, SectionDescriptionTitle} from "./styled";

const SectionDescription = ({ sectionDescription, sectionTitle }) => {
    return (
        <div>
            <SectionDescriptionTitle>{sectionTitle}</SectionDescriptionTitle>
            <SectionDescriptionParagraph>{sectionDescription}</SectionDescriptionParagraph>
        </div>
    );
};

export default SectionDescription;