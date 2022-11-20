import React from "react";
import SectionDescription from "../../common/SectionDescription";
import { ContactImage, ContactLink, ContactLinksWrapper, ContactSectionWrapper, GithubIcon, LinkedInIcon } from "./styled";

const Contact = () => {
    return (
        <ContactSectionWrapper>
            <SectionDescription
                sectionTitle={`Contact`}
                sectionDescription={
                    <span>
                        I am always open to any suggestions and ideas.
                        <br />If you hava any questions or want a website or mobile app, feel free to contact me through one of the following way:
                    </span>
                }
                additionalContent={
                    <ContactLinksWrapper>
                        <ContactLink mail href="mailto:patrick36212@gmail.com">
                            patrick36212@gmail.com
                        </ContactLink>
                        <ContactLink target="_blank" href="https://github.com/patrick36212">
                            <GithubIcon />
                        </ContactLink>
                        <ContactLink target="_blank" href="https://www.linkedin.com/in/patryk-krawczyk-b09413188/">
                            <LinkedInIcon />
                        </ContactLink>
                    </ContactLinksWrapper>
                }
            />
            <ContactImage />
        </ContactSectionWrapper>
    );
};

export default Contact;