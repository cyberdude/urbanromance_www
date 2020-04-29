import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <div>
      <LogoImg src="/URBANROMANCE-LOGO.png" />
    </div>
  </Link>
);

const LogoImg = styled.img({
  width: 260,
  margin: "auto",
  marginTop: 20,
  marginBottom: 30,
  cursor: "pointer",
});
