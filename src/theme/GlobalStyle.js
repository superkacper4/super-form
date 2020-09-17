import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    scroll-behavior:smooth;

}

html{
    font-size: 62.5%;
    animation: start 0.5s 1 linear both;

    
@keyframes start {
    0%{opacity:0};
    100%{opacity:1;}
}
}

body {
    margin: 0;
    padding:0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}
`;

export default GlobalStyle;
