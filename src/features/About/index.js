import React from "react";
import SectionDescription from "../../common/SectionDescription";
import { AboutImage, AboutWrapper, DescriptionWrapper } from "./styled";

const About = () => {
    return (
        <AboutWrapper>
            <AboutImage alt="Patryk Krawwczyk in frot of Dunaj river" />
            <DescriptionWrapper>
                <SectionDescription
                    sectionTitle={`About`}
                    sectionDescription={
                        <span>
                            Hi, I am
                            <br />
                            <br />Patryk Krawczyk, a pasionate Front-End Developer.
                            <br />JavaScript is my Language, React is how i speak.
                            <br />I am expirienced with responsive frontend design.
                            <br />Fast learner, open to new oportunities.
                        </span>}
                />
            </DescriptionWrapper>
        </AboutWrapper>
    );
};


export default About;