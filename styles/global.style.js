import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    .App {
        margin: 0 auto;
        border: 1px solid red;
        max-width: 1200px;
    }
`;

export default GlobalStyle;