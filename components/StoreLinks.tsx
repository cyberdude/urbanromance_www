import React from "react";
import { StoreLinksType } from "./types";
import styled from "styled-components";

type Props = {
  links: StoreLinksType;
};

export const StoreLinks = ({ links }: Props) => {
  const { itunes, spotify } = links;

  return (
    <StoreLinksContainer>
      <h2>Get the music</h2>
      <StoreAnchor href={itunes.url} target="_blank">
        <StoreImage src="/icons/itunes.svg" /> iTunes
      </StoreAnchor>

      <StoreAnchor href={spotify.url} target="_blank">
        <StoreImage src="/icons/spotify.svg" /> Spotify
      </StoreAnchor>
    </StoreLinksContainer>
  );
};

const StoreLinksContainer = styled.div({
  textAlign: "center",
  width: "100%"
});

const StoreAnchor = styled.a({
  display: "flex",
  alignItems: "center",
  fontSize: 20,
  textDecoration: "none",
  justifyContent: "center",
  marginBottom: 10,
  "&:hover": {
    textDecoration: "underline"
  }
});

const StoreImage = styled.img({
  width: 40,
  marginRight: 5
});
