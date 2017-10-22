import Head from 'next/head';
import Section from '../../components/common/section';
import { styles, mediaQueries } from '../../constants';

const heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/banners/header_background_shorter.jpg)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '50vh',
};

const heroDarkOverlay = {
  display: 'block',
  width: '100%',
  height: '100%',
  padding: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  background: 'hsla(0,0%,0%,.6) none repeat scroll 0 0',
};

const ConductHero = () => (
  <div>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers, june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community, meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets" />
      <meta name="description" content="an Open-Source, Community Event by Cluj JavaScripters" />
      <meta name="News_Keywords" content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers, june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community, meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets" />
      <title>JSHeroes 2018 | Code of Conduct</title>
      <meta property="og:title" content="JSHeroes 2018 | Code of Conduct" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.jsheroes.io/code-of-conduct" />
      <meta property="og:image" content="http://www.jsheroes.io/static/img/social_media/25931203.jpeg" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:description" content="an Open-Source, Community Event by Cluj JavaScripters" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="JSHeroes 2018 | Code of Conduct" />
      <meta name="twitter:site" content="@jsheroes" />
      <meta name="twitter:title" content="JSHeroes 2018 | Code of Conduct" />
      <meta name="twitter:description" content="an Open-Source, Community Event by Cluj JavaScripters" />
      <meta name="twitter:image" content="http://www.jsheroes.io/static/img/meta/clujsers_audience.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@jsheroes" />
    </Head>

    <Section
      section={{ style: heroBcgImg }}
      mainContainer={{ style: heroDarkOverlay }}
    >
      <div className="dark-banner-overlay">
        <h2 className="text-center" id="logo">The <span className="logoJs">JS</span><span className="logoHeroes">Heroes</span> Code of Conduct</h2>
      </div>
    </Section>
    <style jsx>{`
      .logoJs {
        color: #0098ff;
      }
      .logoHeroes {
        color: #e1ebef;
      }
      .header-logo {
        padding: 10px;
      }
      .dark-banner-overlay {
        width: 100%;
        height: 30%;
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        background: hsla(0,0%,0%,.6) none repeat scroll 0 0;
      }
      
      h2 {
        margin: 45px auto 30px;
        line-height: 1.1;
        color: ${styles.mainColor3};
        font-size: 54px;
        font-weight: 700;
        text-align: center;
      }
      
      @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
        h2 {
          font-size: 46px;
        }
      }
      
      @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
        h2 {
          font-size: 43px;
        }
      }
      
      @media (max-width: ${mediaQueries.S}) {
        h2 {
          font-size: 24px;
        }
      }
    `}</style>
  </div>
);

module.exports = ConductHero;
