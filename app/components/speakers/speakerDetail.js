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
        <meta property="og:url" content={`https://jsheroes.io/speakers/${speaker.permalink}`} />
        <meta property="og:image" content={`https://jsheroes.io/static/img/speakers/${speaker.img}`} />
        <meta name="twitter:image" content={`https://jsheroes.io/static/img/speakers/${speaker.img}`} />
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
              <div className="details-container">
                <div className="details hidden-lg hidden-md">
                  <span className="name">{ speaker.fullName }</span>
                  <div><strong>{ speaker.position }</strong></div>
                  <div><strong>{ speaker.company }</strong></div>
                </div>
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
              <div className="details visible-md visible-lg">
                <h1 className="name">{ speaker.fullName }</h1>
                <div>
                  <strong>{ speaker.position }</strong>
                  { speaker.company && (
                    <span> @ <strong>{ speaker.company }</strong></span>
                   ) }
                </div>
              </div>
              <RawHtml className="description" content={speaker.description} />
              { talks }
              <div className="hidden-md hidden-lg">
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
          </div>
        </div>
      </Section>
      <style jsx>{`
      .speakers-page {
          padding-top: 110px;
          margin-bottom: 30px;
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
        width: 200px;
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
        text-align: justify;
      }

      .side .social-links {
        text-align: center;
      }

      .join {
        margin: 50px 0;
      }

      .speaker-info-box {
        max-width: 245px;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
      }

      .speaker-img {
        cursor: pointer;
      }
  
      .speaker-img img {
        max-width: 245px;
        display: block;
        border: 0;
        max-width: 100%;
        height: auto;
        filter: grayscale(100%);
      }

      .name {
        color: ${styles.mainColor6};
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 24px;
      }

      .description {
        margin-top: 25px;
        margin-bottom: 25px;
      }

      @media (max-width: ${mediaQueries.L} ) {
        .details {
          text-align: center;
        }
        .main .join {
          margin: 60px 0 20px 0;
        }

        .speakers-page {
          padding-top: 65px;
        }

        .main {
          padding: 0 20px;
          
        }

        .side {
          display: flex;
          margin-bottom: 30px;
          padding: 0 20px;
        }

        .speaker-info-box {
          display: inline-block;
          margin: auto;
        }

        .details-container {
          flex: 1;
          padding: 10px;
        }
      }

      @media (max-width: ${mediaQueries.XS} ) {
        .side,
        .speaker-info-box
        {
          display: block;
        }

        .details-container {
          flex: none;
          margin-top: 30px;
        }

        .buy-ticket {
          width: 100%;
        }

        .join {
          text-align: center;
        }
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
        talk && buildCurrentTalk(talk, speaker)
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
        margin: 20px 0;
      }

      h4 {
        font-size: 18px;
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

function buildCurrentTalk({ title, description, message }, { firstName }) {
  return (
    <div>
      <h3>{ firstName }`s talk: {title}</h3>
      <RawHtml content={description} />
      { message && (
        <p className="teaser">
          <span>You will learn:</span>
          <div><i>{message}</i></div>
        </p>
      ) }
      <style jsx>{`
        h3 {
          margin: 20px 20px 5px 0;
          font-size: 18px;
        }
        @media (max-width: ${mediaQueries.L} ) {
          .h3{
            margin: 20px 20px 20px 0;
          }
        }
        .teaser {
          margin: 20px 0;
        }
        
        .teaser span {
          font-weight: 500;
        }`
      }</style>
    </div>
  );
}
