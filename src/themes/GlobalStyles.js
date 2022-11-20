import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;  
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({theme}) => theme.color.mainBackground};
        color: ${({theme}) => theme.color.mainFont};
    }
`;

export default GlobalStyle;