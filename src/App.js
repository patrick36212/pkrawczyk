import React from "react";
import { ThemeProvider } from "styled-components";
import Burger from "../src/common/Burger";
import GlobalStyle from "./themes/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Burger />
    </ThemeProvider>
  );
}

export default App;
