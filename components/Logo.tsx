import React from "react";
import styled from "styled-components";

export const Logo = () => (
  <LogoText>
    <FirstLetters>u</FirstLetters>rban<FirstLetters>r</FirstLetters>omance
  </LogoText>
);

const LogoText = styled.h1({
  textTransform: "uppercase",
  color: "black",
  fontSize: "3em",
  margin: "28px 0 0 ",
  textAlign: "center",
  fontFamily: "'Moon 2.0 Regular'",
  letterSpacing: 9
});

const FirstLetters = styled.span({
  color: "#974b92"
});
