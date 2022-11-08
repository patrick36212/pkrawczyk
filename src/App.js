import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyles";
import { lightMode } from "./themes/theme";

import Burger from "../src/common/Burger";

const App = () => {
  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyle />
      <Burger />
    </ThemeProvider>
  );
}

export default App;
