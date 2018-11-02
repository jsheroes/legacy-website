import Head from 'next/head';
import Router from 'next/router';
import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import Link from '../app/components/common/link';
import store from '../app/data/index';
import { styles, mediaQueries } from '../app/constants';
import RawHtml from '../app/components/common/rawHtml';
import Helpers from '../app/helpers';

const Workshop = ({ speakers }) => {
  const firstSpeaker = speakers[0];
  const secondSpeaker = speakers.length > 1 ? speakers[1] : null;

  const { workshop } = firstSpeaker;

  const workshopTitle = workshop.soldOut ? `${workshop.title} ( SOLD OUT )` : workshop.title;

  const secondSpeakerAddition = secondSpeaker ? ` and ${secondSpeaker.fullName}` : '';
  const seoTitle = `${workshop.title} by ${firstSpeaker.fullName}${secondSpeakerAddition}`;

  return (
    <Layout page="workshop">
      <Head>
        <title />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://jsheroes.io/workshops/${workshop.permalink}`} />
        <meta
          property="og:image"
          content={`https://jsheroes.io/static/img/technologies/${workshop.logo}`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:description" content={workshop.socialMedia} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={seoTitle} />
        <meta name="twitter:site" content="@jsheroes" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={workshop.socialMedia} />
        <meta
          name="twitter:image"
          content={`https://jsheroes.io/static/img/technologies/${workshop.logo}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Section>
        <div className="workshop-details">
          <img
            className="tech-image"
            src={`/static/img/technologies/${workshop.logo}`}
            alt={workshop.title}
          />
          <div className="workshop-title">
            <h1>{workshopTitle}</h1>
            <span>
              by:&nbsp;
              <strong>
                <Link
                  href={`/speakers?name=${firstSpeaker.permalink}`}
                  as={`/speakers/${firstSpeaker.permalink}`}
                  onMouseEnter={() => {
                    Router.prefetch(`/speakers?name=${firstSpeaker.permalink}`);
                  }}
                  theme={Link.THEME_DARK}
                >
                  {firstSpeaker.fullName}
                </Link>
                {secondSpeaker && (
                  <span>
                    {' & '}
                    <Link
                      href={`/speakers?name=${secondSpeaker.permalink}`}
                      as={`/speakers/${secondSpeaker.permalink}`}
                      onMouseEnter={() => {
                        Router.prefetch(`/speakers?name=${secondSpeaker.permalink}`);
                      }}
                      theme={Link.THEME_DARK}
                    >
                      {secondSpeaker.fullName}
                    </Link>
                  </span>
                )}
              </strong>
            </span>
            <p className="workshop-type">{workshop.type}, April 18th</p>
          </div>
        </div>
        <div className="workshop-description clearfix">
          <p className="workshop-section">
            <strong>Curricula</strong>
          </p>
          <RawHtml content={workshop.description} />
          <p className="workshop-section">
            <strong>Prerequisites</strong>
          </p>
          <RawHtml content={workshop.prerequisites} />
          <p className="workshop-section">
            <strong>About the trainer</strong>
          </p>
          <RawHtml content={firstSpeaker.description} />
          {secondSpeaker && <RawHtml content={secondSpeaker.description} />}
          <div className="workshop-section">
            <div>
              Are you interested in
              <strong>
                &nbsp;
                {firstSpeaker.firstName}
              </strong>
              `s workshop?
            </div>
            <div>Join {firstSpeaker.reference} at JSHeroes!</div>
          </div>
          <div className="workshop-ticket">
            <Link
              theme={Link.THEME_DARK}
              href="https://ti.to/cluj-javascripters/workshops-day-jsheroes-2018"
            >
              <span className="button">Buy your Ticket</span>
            </Link>
          </div>
        </div>
        <style jsx>
          {`
            h1 {
              color: ${styles.mainColor6};
            }

            h1,
            h2 {
              font-size: 24px !important;
            }

            h3,
            h4 {
              font-size: 18px !important;
            }

            .clearfix {
              clear: both;
            }

            .workshop-details {
              margin-top: 65px;
              text-align: center;
            }

            .tech-image {
              max-height: 100px;
            }

            .workshop-title {
              margin-top: 20px;
            }

            .workshop-type {
              margin-top: 27px;
            }

            .workshop-section {
              margin-top: 35px;
              margin-bottom: 0;
            }

            .workshop-ticket {
              margin-top: 35px;
              margin-bottom: 35px;
            }

            .workshop-description {
              text-align: justify;
            }

            .button {
              margin: 10px 0;
              padding: 10px;
              width: 100%;
            }

            @media (min-width: ${mediaQueries.XS}) {
              .workshop-title {
                float: left;
                flex: 1;
                margin: 0 0 0 20px;
              }

              .workshop-details {
                display: flex;
                text-align: left;
              }

              .button {
                max-width: 200px;
              }

              .tech-image {
                float: left;
              }
            }

            @media (min-width: ${mediaQueries.L}) {
              .workshop-details {
                margin-top: 110px;
              }
            }
          `}
        </style>
      </Section>
    </Layout>
  );
};

Workshop.getInitialProps = async ({ res, query }) => {
  const workshopName = query.name;
  if (!workshopName) {
    Helpers.redirectTo(res, '/');
  }

  const speakers = store.data2019.speakers.filter(
    s => s.workshop && s.workshop.permalink === workshopName,
  );

  if (speakers.length <= 0) {
    Helpers.redirectTo(res, '/');
  }

  return { speakers };
};

export default Workshop;
