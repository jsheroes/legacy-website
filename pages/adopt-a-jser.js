import React from 'react';
import Head from 'next/head';
import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import AdoptAJSerHero from '../app/components/adopt-a-jser-hero';
import RawHtml from '../app/components/common/rawHtml';

import { styles, mediaQueries, beAHostLink, beAGuestLink } from '../app/constants';
import { couchSurfing, contest } from '../app/data/adopt-a-jser';
// todo remove code if not used in 2019
const AdoptAJSer = () => (
  <Layout page="adopt-a-jser">
    <Head>
      <title>Adopt a JSer</title>
    </Head>

    <AdoptAJSerHero />

    <Section>
      <div className="couch-surf-description">
        <RawHtml content={couchSurfing} className="p-mb-30" />

        <div className="main-box-wrapper">
          <a title="Be a Guest" target="_blank" rel="noopener noreferrer" href={beAGuestLink}>
            <div className="main-box">
              <h3>Be a Guest</h3>
              <span />
              <p>Connect with a Host<br />from Cluj-Napoca.</p>
            </div>
          </a>

          <a title="Become a Host" target="_blank" rel="noopener noreferrer" href={beAHostLink}>
            <div className="main-box host">
              <h3>Become a Host</h3>
              <span />
              <p>Share your home with<br />a JavaScripter.</p>
            </div>
          </a>
        </div>
      </div>

      <div className="contest-description">
        <h3>JSHeroes</h3>
        <h3>PHOTO <span>CONTEST</span></h3>

        <div className="contest-txt-img">
          <div className="img-wrapper">
            <img src="/static/img/adopt_a_jser.jpg" alt="Adopt a JavaScripter" />
          </div>
          <RawHtml wrapperClassName="w-max-width w-mt-30" className="p-mb-30" content={contest} />
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
          justify-content: space-around;
          margin-top: 30px;
        }

        .main-box-wrapper a {
          text-decoration: none;
          margin: 0 30px;
        }

        .main-box {
          display: flex;
          flex-direction: column;
          width: 250px;
          padding: 45px 40px 30px;
          border: 2px solid ${styles.mainColor6};
          border-radius: 4px;
          background-color: ${styles.mainColor6};
          color: ${styles.mainColor3};
        }

        .main-box h3 {
          margin: 0;
          font-size: 18px;
          opacity: .9;
        }

        .main-box span {
          width: 40px;
          border-top: 1px solid ${styles.mainColor3};
          margin: 28px 0;
          align-self: center;
          opacity: .6;
        }

        .main-box p {
          margin-bottom: 0;
          font-size: 16px;
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

        .contest-description {
          border-top: 1px dashed ${styles.mainColor2};
          padding-top: 65px;
          margin-top: 70px;
          margin-bottom: 45px;
        }
        .contest-description h3 {
          font-weight: 800;
        }
        .contest-description h3 span {
          font-weight: 400;
        }
        .contest-txt-img {
          display: flex;
          flex-flow: row-reverse wrap;
          justify-content: space-between;
        }
        .img-wrapper {
          width: 350px;
          height: auto;
        }
        img {
          width: inherit;
          height: auto;
        }

        @media (max-width: ${mediaQueries.XL} ){
          .contest-description {
            text-align: center;
          }
          .contest-txt-img {
            justify-content: center;
          }
          .img-wrapper {
            margin-top: 40px;
            margin-bottom: 20px;
          }
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
          .main-box-wrapper a:first-child {
            margin-bottom: 30px;
          }
        }
        @media (max-width: ${mediaQueries.XS}) {
          .main-box-wrapper a {
            margin-left: 0;
            margin-right: 0;
          }
          .img-wrapper {
            width: 290px;
          }

          .main-box {
            width: 290px;
            padding: 50px 40px 40px;
          }
          .main-box span {
            margin-top: 30px;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </Section>
  </Layout>
);

export default AdoptAJSer;
