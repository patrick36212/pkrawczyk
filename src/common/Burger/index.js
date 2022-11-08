import React, { useState } from "react";
import { BurgerBody, BurgerButton } from "./styled";

const Burger = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <BurgerButton onClick={() => isActive ? setIsActive(false) : setIsActive(true)}>
            <BurgerBody active={isActive} />
            <BurgerBody active={isActive} />
        </BurgerButton>
    );
};

export default Burger;