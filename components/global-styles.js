import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
@font-face {
  font-family: "ANDALEMO";
  font-style: normal;
  font-weight: normal;
  src: local("ANDALEMO"),
    url("ANDALEMO.woff") format("woff");
}

body {
  font-family: "ANDALEMO", monospace;
}

.disabled {
  pointer-events: none;
  cursor: default;
  opacity: .2
}
`;

export const ContentHolder = styled.div({
  justifyContent: "center",
  alignContent: "center",
  width: "100%",
  display: "flex",
  textAlign: "center",
});
