import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        font-family: 'Roboto', 'sans-serif';
        box-sizing: border-box;
        user-select: none;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', 'sans-serif';
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

    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #E7EAF1;
    }
    
    b {
        font-weight: bold;
    }
`;

export default GlobalStyle;
