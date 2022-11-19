import React from "react";
import { ControlsWrapper, StyledControl } from "./styled";

const PageControls = () => {

    return (
        <ControlsWrapper>
            <StyledControl active />
            <StyledControl />
            <StyledControl />
            <StyledControl />
        </ControlsWrapper>
    );
};

export default PageControls;