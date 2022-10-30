import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing :border-box;
}

body {
  font-family: 'Source Sans Pro', sans-serif;

}
a {
  text-decoration : none;
  color: inherit;
}
${reset}
`;

export default GlobalStyle;
