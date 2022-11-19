import React from "react";
import { PageSection } from "./styled";
import PageControls from "../PageControls";

const Section = ({ children }) => {
    return (
        <PageSection>
            <PageControls />
            {children}
        </PageSection>
    )
};

export default Section;