import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import speakers from '../app/data/speakers';
import { styles, mediaQueries } from '../app/constants';
import RawHtml from '../app/components/common/rawHtml';
import Helpers from '../app/helpers';

const Workshop = ({ speaker }) => {
  const { workshop } = speaker;

  return (
    <Layout page="workshop">
      <Head>
        <title>{ workshop.title } by { speaker.fullName }</title>
        <meta property="og:title" content={`${workshop.title} by ${speaker.fullName}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://jsheroes.io/workshops/${workshop.permalink}`} />
        <meta property="og:image" content={`https://jsheroes.io/static/img/technologies/${workshop.logo}`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:description" content={workshop.socialMedia} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={`${workshop.title} by ${speaker.fullName}`} />
        <meta name="twitter:site" content="@jsheroes" />
        <meta name="twitter:title" content={`${workshop.title} by ${speaker.fullName}`} />
        <meta name="twitter:description" content={workshop.socialMedia} />
        <meta name="twitter:image" content={`https://jsheroes.io/static/img/technologies/${workshop.logo}`} />
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
            <h1>{ workshop.title }</h1>
            <span>by: <strong>
              <Link href={`/speakers?name=${speaker.permalink}`} as={`/speakers/${speaker.permalink}`}>
                <a onMouseEnter={() => { Router.prefetch(`/speakers?name=${speaker.permalink}`); }}>{ speaker.fullName }</a>
              </Link>
            </strong></span>
            <p className="workshop-type">{ workshop.type }, April 18th</p>
          </div>
        </div>
        <div className="workshop-description clearfix">
          <p className="workshop-section"><strong>Curricula</strong></p>
          <RawHtml content={workshop.description} />
          <p className="workshop-section"><strong>Prerequisites</strong></p>
          <RawHtml content={workshop.prerequisites} />
          <p className="workshop-section"><strong>About the trainer</strong></p>
          <RawHtml content={speaker.description} />
          <div className="workshop-section">
            <div>Are you interested in <strong>{ speaker.firstName }</strong>`s workshop?</div>
            <div>Join { speaker.reference } at JSHeroes!</div>
          </div>
          <div className="workshop-ticket">
            <a
              href="https://ti.to/cluj-javascripters/workshops-day-jsheroes-2018"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Buy your Ticket
            </a>
          </div>
        </div>
        <style jsx>{`
          h1 {
            color: ${styles.mainColor6};
          }

          h1, h2 {
            font-size: 24px !important;
          }
    
          h3, h4 {
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
            text-decoration: none;
          }

          @media (min-width: ${mediaQueries.XS} ){
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

          @media (min-width: ${mediaQueries.L}){
            .workshop-details {
              margin-top: 110px;
            }
          }
        `}</style>
      </Section>
    </Layout>
  );
};

Workshop.getInitialProps = async ({ res, query }) => {
  const workshopName = query.name;
  if (!workshopName) {
    Helpers.redirectTo(res, '/');
  }

  const speaker = speakers.find(s => s.workshop && s.workshop.permalink === workshopName);
  if (!speaker) {
    Helpers.redirectTo(res, '/');
  }

  return { speaker };
};

export default Workshop;
