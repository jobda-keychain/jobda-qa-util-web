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
`;

export default GlobalStyle;
