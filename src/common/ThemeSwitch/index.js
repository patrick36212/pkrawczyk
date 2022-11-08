import React, { useState } from "react";
import { SwitchBody, SwitchItem, ThemeSwichBody, ThemeSwitchButton, Info } from "./styled";

const ThemeSwitch = () => {
    const [isDarkModeOn, setIsDarkModeOn] = useState(false);

    return (
        <ThemeSwichBody>
            <ThemeSwitchButton onClick={() => isDarkModeOn ? setIsDarkModeOn(false) : setIsDarkModeOn(true)}>
                <Info>
                    Dark mode {isDarkModeOn ? "Off" : "on"}
                </Info>
                <SwitchBody>
                    <SwitchItem active={isDarkModeOn} />
                </SwitchBody>
            </ThemeSwitchButton>
        </ThemeSwichBody>
    )
};

export default ThemeSwitch;