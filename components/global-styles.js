import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
@font-face {
  font-family: "Moon 2.0 Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Moon 2.0 Regular"),
    url("Moon2.0-Regular.woff") format("woff");
}

@font-face {
  font-family: "Moon 2.0 Bold";
  font-style: normal;
  font-weight: normal;
  src: local("Moon 2.0 Bold"),
    url("Moon2.0-Bold.woff") format("woff");
}

@font-face {
  font-family: "Moon 2.0 Light";
  font-style: normal;
  font-weight: normal;
  src: local("Moon 2.0 Light"),
    url("Moon2.0-Light.woff") format("woff");
}

body {
  font-family: "Source Code Pro", monospace;
}

.disabled {
  pointer-events: none;
  cursor: default;
  opacity: .2
}
`;
