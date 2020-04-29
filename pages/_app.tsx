import Head from "next/head";
import "../components/global-styles";
import { GlobalStyles, ContentHolder } from "../components/global-styles";
import { Logo } from "../components/Logo";
import { SocialMediaLinks } from "../components/SocialMediaLinks";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>URBANROMANCE</title>
        <link
          rel="icon"
          href="https://urbanromance.band/urbanromance-squared.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />

        <meta property="og:image" content="/urbanromance-squared.jpg" />
        <meta
          property="og:description"
          content="Electronic live duo based in Berlin originating from opposite sides of earth, Puerto Rico and Kazakhstan. Not only the lyrics reflects the emotional rollercoaster of a big city romantic nuances but also contains the mix of jazz elements, synth 80's sounds and down tempo rhythmic flows with the end inviting you to immerse yourself into a rich spherical space of sound scapes."
        />
      </Head>
      <GlobalStyles />
      <ContentHolder>
        <Logo />
      </ContentHolder>

      <Component {...pageProps} />

      <SocialMediaLinks />
    </>
  );
}
