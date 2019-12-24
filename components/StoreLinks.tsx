import React from "react";
import { StoreLinksType } from "./types";
import styled from "styled-components";

type Props = {
  links: StoreLinksType;
};

export const StoreLinks = ({ links }: Props) => {
  const { itunes, spotify, bandcamp } = links;

  return (
    <Container>
      <Title>Get the music</Title>
      <Anchor href={itunes.url} target="_blank">
        <Image src="/icons/itunes.svg" /> <Name>iTunes</Name>
      </Anchor>

      <Anchor href={spotify.url} target="_blank">
        <Image src="/icons/spotify.svg" /> <Name>Spotify</Name>
      </Anchor>

      <Anchor href={bandcamp.url} target="_blank">
        <Image src="/icons/bandcamp.svg" /> <Name>Bandcamp</Name>
      </Anchor>
    </Container>
  );
};

const Container = styled.div({
  textAlign: "center",
  width: "100%"
});

const Title = styled.h2({
  textTransform: "uppercase"
});

const Anchor = styled.a({
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

const Image = styled.img({
  width: 40,
  marginRight: 14
});

const Name = styled.div({
  width: 99,
  textAlign: "left"
});
