import Head from 'next/head';
import Section from '../../components/common/section';
import { styles, mediaQueries } from '../../constants';
import speakers from '../../data/speakers';

const SpeakerDetail = () => {
  const [speaker] = speakers;
  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers, june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community, meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets" />
        <meta name="description" content="an Open-Source, Community Event by Cluj JavaScripters" />
        <meta name="News_Keywords" content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers, june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community, meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets" />
        <title>{ speaker.full_name } at JSHeroes</title>
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

      <Section>
        <div className="speakers-page">
          <h2 className="text-center" id="logo">The <span className="logoJs">JS</span><span className="logoHeroes">Heroes</span> Code of Conduct</h2>
          <div className="row">
            <div className="col-md-3 side">
              <div className="speaker-info-box">
                <div className="speaker-img">
                  <img
                    src={`/static/img/speakers/${speaker.img}`}
                    alt={speaker.full_name}
                  />
                </div>
              </div>
              <div>
                <div className="social-links">
                  { speaker.twitter
                  ? <a href={speaker.twitter} target="_blank">
                    <span className="twitter" />
                  </a>
                : ''}
                  { speaker.github
                ? <a href={speaker.github} target="_blank">
                  <span className="github" />
                </a>
                : ''}
                  { speaker.website
                  ? <a href={speaker.website} target="_blank">
                    <span className="website" />
                  </a>
                  : ''}
                </div>
              </div>
              <div className="visible-md visible-lg">
                <div className="join">
                  <div>Already curious to see <span>{ speaker.name }</span>`s talk?</div>
                  <div>Join him at JSHeroes!</div>
                </div>

                <a
                  href="https://ti.to/cluj-javascripters/jsheroes2018"
                  target="_blank"
                  className="buy-ticket"
                  rel="noopener noreferrer"
                >
                  Buy your Ticket
              </a>
              </div>
            </div>
            <div className="col-md-9 main">
              <div className="details">
                <div className="name">Mark Dalgleish</div>
                <div>DesignOps Lead</div>
                <div>SEEK</div>
              </div>
              <div className="description">
                  Mark Dalgleish is the co-creator of CSS Modules, lead organiser of MelbJS, and DesignOps Lead at SEEK, Australia's leading job site. Having got his start with HTML and UI design at a young age, Mark has since developed a love of open source and software engineering but always as a means to creating elegant, usable experiences.
              </div>
              <div className="talks">
                <h4>Talks by Mark Dalgleish</h4>
                <span className="blue-circle" /><a href="http://youtube.com">Getting CSS Modules out in to the world</a>
              </div>
              <div className="talks">
                <h4>Talks by Mark Dalgleish at previouse JSHeroes Conferences</h4>
                <span className="blue-circle" /><a href="http://youtube.com">Getting CSS Modules out in to the world</a>
              </div>
              <div className="hidden-md hidden-lg">
                <div className="join">
                  <div>Already curious to see <span>{ speaker.name }</span>`s talk?</div>
                  <div>Join him at JSHeroes!</div>
                </div>

                <a
                  href="https://ti.to/cluj-javascripters/jsheroes2018"
                  target="_blank"
                  className="buy-ticket"
                  rel="noopener noreferrer"
                >
                  Buy your Ticket
              </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <style jsx>{`
      .speakers-page {
          padding-top: 70px;
          margin-bottom: 30px;
      }

      @media (max-width: ${mediaQueries.L} ) {
        .details {
          text-align: center;
        }
      }

      .buy-ticket {
        background: ${styles.mainColor6};
        color: white;
        padding: 10px;
        display: inline-block;
        text-align: center;
        width: 100%;
        border-radius: 4px;
        text-decoration: none;
        letter-spacing: 2px;
        margin-bottom: 20px;
      }

      .github, .website, .twitter {
        width: 25px;
        height: 25px;
        display: inline-block;
        vertical-align: middle;
        background-size: 100%;
        margin: 10px;
      }

      .github {
        background-image: url( "/static/img/social_media/github-logo.svg" );
      }

      .twitter {
        background-image: url( "/static/img/social_media/twitter-logo.svg" );
      }

      .website {
        background-image: url( "/static/img/social_media/link-symbol.svg" );
      }

      .speakers-page .side {
        padding: 0 30px;
      }

      .main {
        padding: 0 40px;
      }

      .side, .join {
        text-align: center;
      }

      .join {
        margin: 50px 0;
      }

      .side .join span {
        text-transform: capitalize;
      }

      .speaker-info-box {
        max-width: 245px;
        position: relative;
        text-align: center;
        margin: 0 auto;
        border: 12px solid #ccc;
        overflow: hidden;
        box-sizing: border-box;
      }

      .speaker-img {
        cursor: pointer;
      }
  
      .speaker-img img {
        display: block;
        margin-right: auto;
        margin-left: auto;
        vertical-align: middle;
        border: 0;
        max-width: 100%;
        height: auto;
        filter: grayscale(100%);
      }

      .speakers-page .name {
        color: ${styles.mainColor6};
        font-weight: bold;
        margin-bottom: 5px;
      }

      .speakers-page .description {
        margin-top: 25px;
        margin-bottom: 25px;
      }

      .speakers-page .talks {
        margin: 40px 0;
      }

      .speakers-page .talks h4 {
        font-size: 20px;
      }

      .speakers-page .talks a {
        text-decoration: none;
        color: #333;
      }

      .speakers-page .talks .blue-circle {
        display: inline-block;
        margin-right: 20px;
        width: 10px;
        height: 10px;
        background: ${styles.mainColor6};
        border-radius: 5px;
      }
      `}</style>
    </div>
  );
};

module.exports = SpeakerDetail;

