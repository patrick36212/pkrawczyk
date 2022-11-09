import React from "react";
import { ControlsWrapper, StyledControl } from "./styled";

const PageControls = ({ active, onClick }) => {

    return (
        <ControlsWrapper>
            <StyledControl active={active} onClick={onClick} />
            <StyledControl active={active} onClick={onClick} />
            <StyledControl active={active} onClick={onClick} />
        </ControlsWrapper>
    );
};

export default PageControls;