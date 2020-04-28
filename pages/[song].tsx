import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
// import { Logo } from "../components/Logo";
import { GlobalStyles, ContentHolder } from "../components/global-styles";
import { StoreLinks } from "../components/StoreLinks";
import { SongsMapType } from "../components/types";
import { initGA, logPageView } from "../utils/analytics";

const songs: SongsMapType = {
  "apple-tree": {
    label: "Apple Tree",
    soundcloudTrackId: "698207227",
    storeLinks: {
      itunes: {
        url: "https://music.apple.com/us/album/apple-tree-single/1492391333",
      },
      spotify: {
        url:
          "https://open.spotify.com/track/2czo0Q6lvbfHqAOnflzs2f?si=zkh6e_MnRyG_in1I4B6g-g",
      },
      bandcamp: {
        url: "http://uromance.bandcamp.com/track/apple-tree",
      },
    },
  },
  unglorified: {
    label: "Unglorified",
    soundcloudTrackId: "753360598",
    storeLinks: null,
  },
  feel: {
    label: "Feel",
    soundcloudTrackId: "773628301",
    storeLinks: {
      itunes: {
        url: "https://music.apple.com/us/album/feel-single/1509944762",
      },
      spotify: {
        url:
          "https://open.spotify.com/album/6diye3M5genAiOODkEXaO9?si=uVlKZ6_RRVyCjLHwB_qhTA",
      },
      bandcamp: {
        url: "https://uromance.bandcamp.com/track/feel",
      },
    },
  },
};

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;

      logPageView();
    }
  });

  const { query } = router;

  if (!query && !query.song) {
    return null;
  }

  const { song = "apple-tree" } = query;
  const trackInfo = songs[song as string];

  console.info("Loading track", { trackInfo });

  return (
    <div>
      <Head>
        <title>URBANROMANCE - {trackInfo.label}</title>
      </Head>
      <GlobalStyles />

      <ContentHolder>
        <div>
          <Title>{trackInfo.label}</Title>
          <SouncloudPlayer
            width="550"
            height="166"
            scrolling="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackInfo.soundcloudTrackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          />
          <StoreLinks links={trackInfo.storeLinks} />
        </div>
      </ContentHolder>
    </div>
  );
};

const Title = styled.h1({
  fontSize: 22,
});

const SouncloudPlayer = styled.iframe({
  border: "none",
});

export default Home;
