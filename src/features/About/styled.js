import styled from "styled-components"
import person from "./PK.png";

export const AboutWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 49.99vw);
    overflow: hidden;
`;

export const AboutImage = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${person});
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`; 
