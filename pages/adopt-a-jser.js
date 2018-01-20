import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import { styles, mediaQueries } from '../app/constants';
import { couchSurfing } from '../app/data/adopt-a-jser'
import RawHtml from '../app/components/common/rawHtml';
import AdoptAJSerHero from '../app/components/adopt-a-jser-hero'

const AdoptAJSer = () => {

  return (
    <Layout page="adopt-a-jser">
      <Head>
        <title>Adopt a JSer</title>
      </Head>
      <AdoptAJSerHero />
      <Section>
        <div className="couch-surf-details">
          <div className="couch-surf-description clearfix">
            <RawHtml content={couchSurfing} />

            <div className="workshop-section">
              <div>Are you interested in <strong>first name</strong>'s workshop?</div>
              <div>Join first name at JSHeroes!</div>
            </div>
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

          .couch-surf-details {
            margin-top: 65px;
            margin-bottom: 65px;
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

          .couch-surf-description {
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

            .couch-surf-details {
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
            .couch-surf-details {
              margin-top: 110px;
            }
          }
        `}</style>
      </Section>
    </Layout>
  );
};

export default AdoptAJSer;
