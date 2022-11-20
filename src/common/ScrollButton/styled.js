import styled, { css } from "styled-components";
import { ReactComponent as VectorImg } from "./Vector.svg";

const Vector = styled(VectorImg)`
    position: absolute;
    left: 48%;
    bottom: 30px;
    stroke: ${({ theme }) => theme.color.secondaryFont}; 

    ${({ up }) => up && css`
        transform: rotate(180deg);
        bottom: 70px;
    `};
`;

export default Vector;