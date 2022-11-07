import React from "react";
import { BurgerBody, BurgerButton } from "./styled";

const Burger = () => {
    return(
        <BurgerButton>
            <BurgerBody />
            <BurgerBody />
        </BurgerButton>
    );
};

export default Burger;