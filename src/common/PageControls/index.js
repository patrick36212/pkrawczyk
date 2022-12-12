import React from "react";
import { ControlsWrapper, StyledControl } from "./styled";

const PageControls = () => {

    return (
        <ControlsWrapper>
            <StyledControl href="#about" active />
            <StyledControl href="#skills" />
            <StyledControl href="#projects" />
            <StyledControl href="#contact"  />
        </ControlsWrapper>
    );
};

export default PageControls;