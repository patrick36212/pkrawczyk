import React from "react";
import GlobalStyle from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkMode } from "./themes/theme";

import Container from "./common/Container";
import Section from "./common/Section";
import Header from "./common/Header";
import Navigation from "./common/Navigation";
import About from "./features/About";
import Contact from "./features/Conatct";
import Skills from "./features/Skills";
import Projects from "./features/Projects";

const App = () => {

  return (
    <ThemeProvider theme={darkMode}>
      <GlobalStyle />
      <Container >
        <Header
          navigation={<Navigation />}
        />
        <Section
          sectionId="about"
        >
          <About />
        </Section>
        <Section
          sectionId="skills"
        >
          <Skills />
        </Section>
        <Section
          sectionId="projects"
        >
          <Projects />
        </Section>
        <Section
          sectionId="contact"
        >
          <Contact />
        </Section>
      </Container>
    </ThemeProvider>
  );
}

export default App;
