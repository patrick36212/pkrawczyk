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

const App = () => {

  return (
    <ThemeProvider theme={darkMode}>
      <GlobalStyle />
      <Container >
        <Header
          navigation={<Navigation />}
        />
        <Section>
          <About />
        </Section>
        <Section>

        </Section>
        <Section>

        </Section>
        <Section>
          <Contact />
        </Section>
      </Container>
    </ThemeProvider>
  );
}

export default App;
