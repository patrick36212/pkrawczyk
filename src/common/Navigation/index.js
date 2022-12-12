import React from "react";
import ThemeSwitch from "../ThemeSwitch";
import { NavigaionLink, NavigationLinkWrapper, NavigationWrapper } from "./styled";

const Navigation = ({ openNav }) => {

    return (
        <NavigationWrapper openNav={openNav}>
            <NavigationLinkWrapper>
                <NavigaionLink href="#about" >{"About"}</NavigaionLink>
                <NavigaionLink href="#skills" >{"Skills"}</NavigaionLink>
                <NavigaionLink href="#projects" >{"Projects"}</NavigaionLink>
                <NavigaionLink href="#contact" >{"Contact"}</NavigaionLink>
            </NavigationLinkWrapper>
            <ThemeSwitch />
        </NavigationWrapper>
    );
};

export default Navigation;