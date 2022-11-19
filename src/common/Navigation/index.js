import React from "react";
import ThemeSwitch from "../ThemeSwitch";
import { NavigaionLink, NavigationLinkWrapper, NavigationWrapper } from "./styled";

const Navigation = ({ openNav }) => {
    return (
        <NavigationWrapper openNav={openNav}>
            <NavigationLinkWrapper>
                <NavigaionLink>{"About"}</NavigaionLink>
                <NavigaionLink>{"Skills"}</NavigaionLink>
                <NavigaionLink>{"Projects"}</NavigaionLink>
                <NavigaionLink>{"Contact"}</NavigaionLink>
            </NavigationLinkWrapper>
            <ThemeSwitch />
        </NavigationWrapper>
    );
};

export default Navigation;