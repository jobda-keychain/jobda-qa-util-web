import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        font-family: 'Roboto', 'sans-serif';
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
`;

export default GlobalStyle;
