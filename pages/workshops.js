import { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import speakers from '../app/data/speakers';
import { styles } from '../app/constants';
import RawHtml from '../app/components/common/rawHtml';
import Helpers from '../app/helpers';

const Workshop = ({ speaker }) => {
  const { workshop } = speaker;

  return (
    <Layout>
      <Head>
        <title>{ workshop.title } by { speaker.fullName }</title>
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
              <Link href={`/speakers?name=${speaker.permalink}`} as={`/speakers/${speaker.permalink}`}>{ speaker.fullName }</Link>
            </strong></span>
            <p className="workshop-type">{ workshop.type }, April 18th</p>
          </div>
        </div>
        <div className="clearfix">
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
              href="https://ti.to/cluj-javascripters/jsheroes2018"
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
            margin-top: 110px;
          }

          .tech-image {
            max-height: 100px;
            float: left;
          }

          .workshop-title {
            float: left;
            margin-left: 20px;
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

          .button {
            margin: 10px 0;
            padding: 10px;
            max-width: 200px;
            text-decoration: none;
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
