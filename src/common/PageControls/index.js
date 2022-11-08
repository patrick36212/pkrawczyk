import React from "react";
import { ControlsWrapper, StyledControl } from "./styled";

const PageControls = () => {
    return (
        <ControlsWrapper>
            <StyledControl type="radio" />
            <StyledControl type="radio" />
            <StyledControl type="radio" />
        </ControlsWrapper>
    )
};

export default PageControls;