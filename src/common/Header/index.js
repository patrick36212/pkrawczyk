import React from "react";
import Burger from "../Burger";
import { HeaderWrapper } from "./styled";

const Header = ({ navigation }) => {
    return (
        <HeaderWrapper>
            <Burger />
            {navigation}
        </HeaderWrapper>
    )
};

export default Header;