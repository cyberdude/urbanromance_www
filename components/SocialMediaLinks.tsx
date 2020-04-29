import React from "react";
import styled from "styled-components";

export const SocialMediaLinks = () => (
  <Container>
    <MediaLink href="https://soundcloud.com/urban-romance">
      <MediaIcon src="/icons/soundcloud-logo.svg" />
    </MediaLink>
    <MediaLink href="https://www.instagram.com/urbanromancemusic/">
      <MediaIcon src="/icons/ig.svg" />
    </MediaLink>
    <MediaLink href="https://fb.me/urbanromanceband">
      <MediaIcon src="/icons/facebook-logo.svg" />
    </MediaLink>
  </Container>
);

const Container = styled.div({
  marginTop: 15,
  marginBottom: 18,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "scale(0.9)",
});

const MediaLink = styled.a({
  display: "block",
  ":first-child": {
    img: {
      width: "56px",
    },
  },
  ":last-child": {
    img: {
      width: "34px",
    },
  },
});

const MediaIcon = styled.img({
  width: "39px",
  paddingLeft: "20px",
});
