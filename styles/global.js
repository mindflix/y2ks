import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: hsl(0, 0%, 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
