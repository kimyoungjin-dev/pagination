import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};

    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    a{
        text-decoration:none;
        color:inherit;
    }
    
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:black;
        color:white;
        margin  : 20px 20px 0px 20px;
    }

    input{
        all:unset;
    }
`;

export default globalStyles;
