import React from "react";
import ThemeSwitch from "../ThemeSwitch";
import { NavigaionLink, NavigationWrapper } from "./styled";

const Navigation = ({ openNav, about, projects, contact }) => {
    return (
        <NavigationWrapper openNav={openNav}>
            <NavigaionLink>{about}</NavigaionLink>
            <NavigaionLink>{projects}</NavigaionLink>
            <NavigaionLink>{contact}</NavigaionLink>
            <ThemeSwitch />
        </NavigationWrapper>
    )
};

export default Navigation;