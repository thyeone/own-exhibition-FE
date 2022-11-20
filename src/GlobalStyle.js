import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
${reset}

* {
  box-sizing :border-box;
  
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #18191E;
  color:#fff;
}

a {
  text-decoration : none;
  color: inherit;
}
`;

export default GlobalStyle;
