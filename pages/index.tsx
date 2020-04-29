import React from "react";
import styled from "styled-components";
import { SocialMediaLinks } from "../components/SocialMediaLinks";

const Index = () => {
  return (
    <Container>
      <ContentWrapper>
        <SoundCloudIframe
          height="360"
          scrolling="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1041681598&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true"
        />

        <HR />

        <FacebookIframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Furbanromanceband%2Fvideos%2F2639502932941077%2F&show_text=0&width=560"
          height="315"
          scrolling="no"
          allowFullScreen={true}
        />
        <SocialMediaLinks />
      </ContentWrapper>
    </Container>
  );
};

export default Index;

const Container = styled.div({
  marginTop: 15,
  display: "flex",
  justifyContent: "center",
});

const ContentWrapper = styled.div({
  width: 560,
});

const FacebookIframe = styled.iframe({
  width: "100%",
  border: "none",
  overflow: "hidden",
  frameborder: 0,
});

const SoundCloudIframe = styled.iframe({
  width: "100%",
  border: 0,
});

const hrMarginVertical = 20;

const HR = styled.hr({
  width: "100%",
  marginTop: hrMarginVertical,
  marginBottom: hrMarginVertical,
});
