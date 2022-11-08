import React from "react";
import { StyledParagraph } from "./styled";

const Paragraph = ({ description }) => {
    return (
        <StyledParagraph>
            <span>{description}</span>
        </StyledParagraph>
    )
};

export default Paragraph;