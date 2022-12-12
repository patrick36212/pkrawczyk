import React from "react";
import { PageSection } from "./styled";
import PageControls from "../PageControls";

const Section = ({ children, sectionId }) => {
    return (
        <PageSection id={sectionId}>
            <PageControls />
            {children}
        </PageSection>
    )
};

export default Section;