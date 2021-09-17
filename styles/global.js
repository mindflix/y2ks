import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: hsl(0, 0%, 98%);
}

a {
  color: inherit;
  text-decoration: none;
}

h1 {
  font-weight: 600;
}

h2,h3,h4,h5 {
  font-weight: normal;
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
