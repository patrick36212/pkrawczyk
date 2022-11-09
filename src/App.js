import React from "react";
import GlobalStyle from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./themes/theme";

import Container from "./common/Container";
import Section from "./common/Section";
import Header from "./common/Header";
import Navigation from "./common/Navigation";
import PageControls from "./common/PageControls";
import Paragraph from "./common/Paragraph";

const App = () => {

  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyle />
      <Container >
        <Header
          navigation={
            <Navigation
              about={'about'}
              projects={'projects'}
              contact={'contact'}
            />}
        />
        <PageControls />
        <Section>
          <Paragraph
            description={'Page about'}
          />
        </Section>
        <Section>
          <Paragraph
            description={`Page projects`}
          />
        </Section>
        <Section>
          <Paragraph
            description={`Page contact`}
          />
        </Section>
      </Container>
    </ThemeProvider>
  );
}

export default App;
