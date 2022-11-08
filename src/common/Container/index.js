import React from "react";
import { FullPageContainer } from "./styled";

const Container = ({ children }) => {
    return (
        <FullPageContainer>
            {children}
        </FullPageContainer>
    )
};

export default Container;