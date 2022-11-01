import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing :border-box;
}

body {
}

a {
  text-decoration : none;
  color: inherit;
}
${reset}
`;

export default GlobalStyle;
