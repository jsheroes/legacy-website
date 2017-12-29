import Head from 'next/head';
import Section from '../common/section';
import RawHtml from '../common/rawHtml';
import { styles, mediaQueries } from '../../constants';

const SpeakerDetail = ({ speaker }) => {
  const talks = buildTalks(speaker);
  return (
    <div>
      <Head>
        <title>{ speaker.fullName } at JSHeroes</title>
        <meta property="og:url" content={`http://www.jsheroes.io/speakers/${speaker.permalink}`} />
        <meta property="og:image" content={`http://www.jsheroes.io/static/img/speakers/${speaker.img}`} />
        <meta name="twitter:image" content={`http://www.jsheroes.io/static/img/speakers/${speaker.img}`} />
      </Head>

      <Section>
        <div className="speakers-page">
          <div className="row">
            <div className="col-md-3 side">
              <div className="speaker-info-box">
                <div className="speaker-img">
                  <img
                    src={`/static/img/speakers/${speaker.img}`}
                    alt={speaker.fullName}
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
                  <div>Already curious to see <strong>{ speaker.firstName }</strong>`s talk?</div>
                  <div>Join { speaker.reference } at JSHeroes!</div>
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
                <h1 className="name">{ speaker.fullName }</h1>
                <div>{ speaker.position }</div>
                <div>{ speaker.company }</div>
              </div>
              <RawHtml className="description" content={speaker.description} />
              { talks }
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
          padding-top: 110px;
          margin-bottom: 30px;
      }

      @media (max-width: ${mediaQueries.L} ) {
        .details {
          text-align: center;
        }
        .main .join {
          margin: 0;
        }
      }
      
      h3 {
        margin: 20px 20px 20px 0;
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

      .side {
        padding: 0 30px;
      }

      .main {
        padding: 0 5px;
      }

      @media (max-width: ${mediaQueries.L} ) {
        padding: 10px;
      }

      .side, .join {
        text-align: center;
      }

      .join {
        margin: 50px 0;
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

      .name {
        color: ${styles.mainColor6};
        font-weight: bold;
        margin-bottom: 5px;
      }

      .description {
        margin-top: 25px;
        margin-bottom: 25px;
      }
      `}</style>
    </div>
  );
};

export default SpeakerDetail;

function buildTalks(speaker) {
  const { talk, previousTalks, otherTalks } = speaker;
  const jsheroesTalks = previousTalks.map(talkRow);
  const generalTalks = otherTalks.map(talkRow);

  return (
    <div>
      {
        talk && buildCurrentTalk(talk)
      }
      {
        jsheroesTalks.length > 0 && (
          <div className="talks" key="jsheroes">
            <h4>See { speaker.firstName } at previous JSHeroes events</h4>
            { jsheroesTalks }
          </div>
        )
      }
      {
        generalTalks.length > 0 && (
          <div className="talks" key="general">
            <h4>See { speaker.firstName } at other conferences</h4>
            { generalTalks }
          </div>
        )
      }
      <style jsx>{`
      .talks {
        margin: 40px 0;
      }

      h4 {
        font-size: 20px;
      }

      @media (max-width: ${mediaQueries.L} ) {
        h4 {
          font-size: 18px;
        }
      }
      `}</style>
    </div>
  );
}

function talkRow({ url, name }) {
  return (
    <div key={url}>
      <span className="blue-circle" />
      <a href={url} target="_blank">{ name }</a>
      <style jsx>{`
        a {
          text-decoration: none;
          color: ${styles.mainColor6};
        }

        .blue-circle {
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
}

function buildCurrentTalk({ title, description, message }) {
  return (
    <div>
      <h3>{title}</h3>
      <RawHtml content={description} />
      <p className="teaser"><i>{message}</i></p>
      <style jsx>{`
      h3 {
        margin: 20px 20px 20px 0;
      }
      @media (max-width: ${mediaQueries.L} ) {
        .h3{
           margin: 20px 20px 20px 0;
        }
      }
      .teaser {
        margin: 20px;
        text-align: center;
      }`
        }</style>
    </div>
  );
}
