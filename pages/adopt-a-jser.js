import React from 'react';
import Head from 'next/head';
import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import AdoptAJSerHero from '../app/components/adopt-a-jser-hero';
import RawHtml from '../app/components/common/rawHtml';

import { styles, mediaQueries, beAHostLink, beAGuestLink } from '../app/constants';
import { couchSurfing } from '../app/data/adopt-a-jser';

const AdoptAJSer = () => (
  <Layout page="adopt-a-jser">
    <Head>
      <title>Adopt a JSer</title>
    </Head>

    <AdoptAJSerHero />

    <Section>
      <div className="couch-surf-description">
        <RawHtml content={couchSurfing} />

        <div className="main-box-wrapper">
          <a title="Be a Guest" target="_blank" rel="noopener noreferrer" href={beAGuestLink}>
            <div className="main-box">
              <h4>Be a Guest</h4>
              <span />
              <p>Connect with a Host from Cluj-Napoca.</p>
            </div>
          </a>

          <a title="Become a Host" target="_blank" rel="noopener noreferrer" href={beAHostLink}>
            <div className="main-box host">
              <h4>Become a Host</h4>
              <span />
              <p>Share your home with a JavaScripter.</p>
            </div>
          </a>
        </div>
      </div>

      {/* language=CSS */}
      <style jsx>{`
        .couch-surf-description {
           margin-top: 65px;
           margin-bottom: 65px;
           text-align: center;
           padding: 0 100px;
        }
        .main-box-wrapper {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-evenly;
          margin-top: 30px;
        }

        a {
          text-decoration: none;
          margin: 0 30px;
        }

        .main-box {
          display: flex;
          flex-direction: column;
          width: 220px;
          padding: 40px 40px 30px;
          border: 2px solid ${styles.mainColor6};
          border-radius: 4px;
          background-color: ${styles.mainColor6};
          color: ${styles.mainColor3};
        }

        .main-box h4 {
          margin: 0;
          font-size: 16px;
          opacity: .9;
        }

        .main-box span {
          width: 35px;
          border-top: 1px solid ${styles.mainColor3};
          margin: 20px 0;
          align-self: center;
          opacity: .6;
        }

        .main-box p {
          margin-bottom: 0;
          font-size: 14px;
          font-weight: 400;
          opacity: .9;
        }

        .main-box.host {
          background: transparent;
          color: ${styles.mainColor6};
        }

        .main-box.host span {
          border-top-color: ${styles.mainColor6};
        }

        @media (max-width: ${mediaQueries.L} ){
          .couch-surf-description {
            margin-top: 35px;
            margin-bottom: 35px;
            padding: 0;
          }
          .main-box-wrapper {
            margin-top: 25px;
          }
        }

        @media (max-width: ${mediaQueries.S}) {
          .main-box-wrapper a:first-child {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </Section>
  </Layout>
);

export default AdoptAJSer;
