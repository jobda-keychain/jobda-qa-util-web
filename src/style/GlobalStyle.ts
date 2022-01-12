import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        font-family: 'Roboto', 'sans-serif';
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #f8f9fc;
    };

    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1.5em;
    }

    h3 {
        font-size: 1.17em
    }

    h4 {
        font-size: 1em;
    }

    h5 {
        font-size: .83em;
    }

    h6 {
        font-size: .67em;
    }
`;

export default GlobalStyle;
