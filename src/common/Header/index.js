import React from "react";
import Burger from "../Burger";
import { HeaderWrapper, Title } from "./styled";

const Header = ({ navigation }) => {
    return (
        <HeaderWrapper>
            <Title>pk development</Title>
            <Burger />
            {navigation}
        </HeaderWrapper>
    )
};

export default Header;