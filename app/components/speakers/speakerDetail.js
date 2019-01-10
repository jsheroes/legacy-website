import Head from 'next/head';
import Section from '../common/section';
import RawHtml from '../common/rawHtml';
import { styles, mediaQueries } from '../../constants';
import store from '../../data';
import CTAButton from '../common/ctaButton';
import Link from '../common/link';

const SpeakerDetail = ({ speaker }) => {
  const talks = buildTalks(speaker);
  const imageExtension = speaker.img.split('.')[1];
  return (
    <div>
      <Head>
        <title>{speaker.fullName} at JSHeroes</title>
        <meta property="og:title" content={`${speaker.fullName} at JSHeroes`} />
        <meta property="og:url" content={`https://jsheroes.io/speakers/${speaker.permalink}`} />
        <meta
          property="og:image"
          content={`https://jsheroes.io//static/img/${store.currentYear}/speakers/${speaker.img}`}
        />
        <meta property="og:image:type" content={`image/${imageExtension}`} />
        <meta property="og:description" content={speaker.description} />
        <meta
          name="twitter:image"
          content={`https://jsheroes.io/static/img/speakers/${speaker.img}`}
        />
        <meta name="twitter:title" content={`${speaker.fullName} at JSHeroes`} />
        <meta name="twitter:description" content={speaker.description} />
      </Head>

      <Section>
        <div className="speakers-page">
          <div className="leftColumn">
            <div className="side">
              <div className="speaker-info-box">
                <div className="speaker-img">
                  <img
                    className="lazyload"
                    data-src={`/static/img/${store.currentYear}/speakers/${speaker.img}`}
                    alt={speaker.fullName}
                  />
                </div>
              </div>
              <div className="details-container">
                <div className="details hidden-lg hidden-md">
                  <span className="name">{speaker.fullName}</span>
                  <div>
                    <strong>{speaker.position}</strong>
                  </div>
                  <div>
                    <strong>{speaker.company}</strong>
                  </div>
                </div>
                <div className="social-links">
                  {speaker.twitter ? (
                    <Link href={speaker.twitter}>
                      <span className="twitter" />
                    </Link>
                  ) : (
                    ''
                  )}
                  {speaker.github ? (
                    <Link href={speaker.github}>
                      <span className="github" />
                    </Link>
                  ) : (
                    ''
                  )}
                  {speaker.website ? (
                    <Link href={speaker.website}>
                      <span className="website" />
                    </Link>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="hidden-sm-down">
                <div className="join">
                  <div>
                    Already curious to see <strong>{speaker.firstName}</strong>
                    `s talk?
                  </div>
                  <div>Join {speaker.reference} at JSHeroes!</div>
                </div>
                <CTAButton url="https://ti.to/cluj-javascripters/jsheroes-2019" align="left">
                  Buy Your Ticket
                </CTAButton>
              </div>
            </div>
          </div>
          <div className="rightColumn">
            <div className="details hidden-sm-down">
              <h1 className="name">{speaker.fullName}</h1>
              <div>
                <strong>{speaker.position}</strong>
                {speaker.company && (
                  <span>
                    {' '}
                    @<strong>{speaker.company}</strong>
                  </span>
                )}
              </div>
            </div>
            <RawHtml className="description" content={speaker.description} />
            {talks}
            <div className="hidden-md hidden-lg">
              <div className="join">
                <div>
                  Already curious to see <strong>{speaker.firstName}</strong>
                  `s talk?
                </div>
                <div>Join {speaker.reference} at JSHeroes!</div>
              </div>
              <CTAButton url="https://ti.to/cluj-javascripters/jsheroes-2019">
                Buy Your Ticket
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>
      <style jsx>
        {`
          .speakers-page {
            padding-top: 110px;
            margin-bottom: 30px;
            // background-color: yellow;
            overflow: hidden;
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

          .github,
          .website,
          .twitter {
            width: 25px;
            height: 25px;
            display: inline-block;
            vertical-align: middle;
            background-size: 100%;
            margin: 10px;
          }

          .github {
            background-image: url('/static/img/social_media/github-logo.svg');
          }

          .twitter {
            background-image: url('/static/img/social_media/twitter-logo.svg');
          }

          .website {
            background-image: url('/static/img/social_media/link-symbol.svg');
          }

          .side {
            padding: 0 30px;
          }

          .join {
            margin: 50px 0;
          }

          .speaker-info-box {
            display: flex;
            justify-content: center;
          }

          .speaker-img {
            cursor: pointer;
            max-width: 245px;
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

          .leftColumn {
            float: left;
            width: 25%;
          }

          .rightColumn {
            float: right;
            width: 75%;
            padding-left: 20px;
          }

          @media (max-width: ${mediaQueries.S}) {
            .side,
            .speaker-info-box {
              // display: block;
            }

            .details-container {
              flex: none;
              margin-top: 30px;
              text-align: center;
            }

            .buy-ticket {
              width: 100%;
            }

            .join {
              text-align: center;
            }

            .leftColumn {
              float: none;
              width: 100%;
            }

            .rightColumn {
              float: none;
              width: 100%;
            }
          }
        `}
      </style>
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
      {talk && buildCurrentTalk(talk, speaker)}
      {jsheroesTalks.length > 0 && (
        <div className="talks" key="jsheroes">
          <h4>
            See
            {speaker.firstName} at previous JSHeroes events
          </h4>
          {jsheroesTalks}
        </div>
      )}
      {generalTalks.length > 0 && (
        <div className="talks" key="general">
          <h4>See {speaker.firstName} at other conferences</h4>
          {generalTalks}
        </div>
      )}
      <style jsx>
        {`
          .talks {
            margin: 20px 0;
          }

          h4 {
            font-size: 18px;
          }
        `}
      </style>
    </div>
  );
}

function talkRow({ url, name }) {
  return (
    <div key={url}>
      <span className="blue-circle" />
      <Link href={url} theme={Link.THEME_DARK}>
        {name}
      </Link>
      <style jsx>
        {`
          .blue-circle {
            display: inline-block;
            margin-right: 20px;
            width: 10px;
            height: 10px;
            background: ${styles.mainColor5};
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
}

function buildCurrentTalk({ title, description, message }, { firstName }) {
  return (
    <div>
      <h3>
        {firstName}
        `s talk: {title}
      </h3>
      <RawHtml content={description} />
      {message && (
        <div className="teaser">
          <span>You will learn:</span>
          <p>
            <i>{message}</i>
          </p>
        </div>
      )}
      <style jsx>
        {`
          h3 {
            margin: 20px 20px 5px 0;
            font-size: 18px;
          }
          @media (max-width: ${mediaQueries.L}) {
            .h3 {
              margin: 20px 20px 20px 0;
            }
          }
          .teaser {
            margin: 20px 0;
          }

          .teaser span {
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
}
