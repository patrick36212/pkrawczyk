import React from "react";
import { PageSection } from "./styled";

const Section = ({ children }) => {
    return (
        <PageSection>
            {children}
        </PageSection>
    )
};

export default Section;