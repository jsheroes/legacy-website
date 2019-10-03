import React from 'react';
import Head from 'next/head';

import Layout from '../app/components/layout';
import { mediaQueries, styles, beAHostLink, beAGuestLink } from '../app/constants';

function pixelsToEm(pixels) {
  return `${(pixels / 16).toFixed(2)}em`;
}

const TwoSideButton = () => (
  <React.Fragment>
    <div className="main-box main-colors">
      <div className="button">
        <div className="button__title">
          <a href={beAGuestLink} className="main-colors" target="_blank" rel="noopener noreferrer">
            Be a guest
          </a>
        </div>
        <div className="button__subtitle">Connect with a Host from Cluj-Napoca.</div>
      </div>
    </div>
    <div className="main-box inverse-colors">
      <div className="button">
        <div className="button__title">
          <a
            href={beAHostLink}
            className="inverse-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Be a host
          </a>
        </div>
        <div className="button__subtitle">Share your home with a JavaScripter.</div>
      </div>
    </div>
    <style jsx>
      {`
        .main-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25vw;
          min-height: 262px;
        }

        .main-colors {
          background-color: ${styles.mainColor3};
          color: ${styles.mainColor6};
        }

        .inverse-colors {
          background-color: ${styles.mainColor6};
          color: ${styles.mainColor3};
        }

        .button {
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.42;
          width: 20vw;
          letter-spacing: 0.2px;
          text-align: center;
        }

        .button__title {
          font-size: ${pixelsToEm(32)};
          font-weight: bold;
          letter-spacing: 0.3px;
        }

        .button__title:hover {
          text-decoration: underline;
          cursor: pointer;
        }

        .button__subtitle {
          font-size: ${pixelsToEm(26)};
        }

        @media (max-width: ${mediaQueries.L}) {
          .main-box {
            width: 70vw;
            min-height: 193px;
          }

          .button {
            width: 40vw;
          }

          .button__title {
            font-size: ${pixelsToEm(30.5)};
          }

          .button__subtitle {
            font-size: ${pixelsToEm(24)};
          }
        }
      `}
    </style>
  </React.Fragment>
);

const AdoptAJSer = ({
  isPhotoContestLaunched = false /* The text for the PHOTO CONTEST part should be hidden for now, until we decide to launch contest. */,
}) => (
  <Layout page="adopt-a-jser">
    <Head>
      <title>Adopt a JSer</title>
    </Head>
    <section>
      <div className="container">
        <div className="container__item">
          <picture>
            <source
              media={`(max-width: ${mediaQueries.XS})`}
              srcSet="./static/img/adopt_a_jser_header_smallest.png"
            />
            <source
              media={`(max-width: ${mediaQueries.S})`}
              srcSet="./static/img/adopt_a_jser_header_smaller.png"
            />
            <img
              className="header-image-wrapper"
              src="./static/img/adopt_a_jser_header.png"
              alt="Adopt a Javascripter header"
            />
          </picture>
        </div>
        <div className="container__item container__title">
          <div className="main-title">
            Learn About the <span className="main-title__azure">Adopt a JavaScripter</span>{' '}
            Couch-Surfing Program
          </div>
        </div>
      </div>
      <div className="container__item container__guest-or-host">
        <div className="extend-with-border">
          <TwoSideButton />
        </div>
        <div className="text-box">
          <div className="text-wrapper">
            <div className="text-wrapper__title">Adopt a JavaScripter</div>
            <div>&nbsp;</div>
            <div>
              If you want to be &quot;adopted&quot; by one of our Cluj JavaScripters during the{' '}
              <span className="text-box__bold">JSHeroes conference</span>, you can use our
              &quot;Adopt a JavaScripter&quot; couch-surfing program. <br />
              We will pair you up with a <span className="text-box__bold">Host</span> or a{' '}
              <span className="text-box__bold">Guest</span> that we think is ok for you, according
              to the info you filled in the application forms. Apply if you want to be a Guest, or
              if you are from Cluj-Napoca apply to be a Host.
            </div>
          </div>
        </div>
      </div>
      <div className="separation-line">&nbsp;</div>
      <div className="container__item container__photo-contest">
        <div className="text-box">
          <div className="text-wrapper">
            <div className="text-wrapper__title">JSHeroes PHOTO CONTEST</div>
            <div>&nbsp;</div>
            {isPhotoContestLaunched ? (
              <div>
                You are participating in the “Adopt a JavaScripter” couch-surfing program? Then
                enter the JSHeroes photo contest for a chance to win{' '}
                <span className="text-box__bold">2 free tickets</span> to the JSHeroes conference.{' '}
                <br />
                How does the contest work? <br />
                Take a photo with yourself and your Host or Guest. <br />
                Then post it on Twitter with the hashtag{' '}
                <span className="text-box__bold">#adoptajavascripter</span>. <br />
                The winner will be selected randomly using random.org. <br />
                Post your photos until April 9, 2019. <br />
                Pretty simple!
              </div>
            ) : (
              'Details coming soon...'
            )}
          </div>
        </div>
        <div className="image-box">
          <picture>
            <img
              src="./static/img/adopt_a_jser_photo-contest.png"
              className="contest-image-wrapper"
              alt="Adopt a Javascripter contest"
            />
          </picture>
        </div>
      </div>
    </section>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .container__item {
          width: 100%;
        }

        .container__title {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 241px;
        }

        .container__guest-or-host {
          min-height: 642px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .container__photo-contest {
          display: flex;
          align-items: center;
          justify-content: space-around;
          min-height: 748px;
        }

        .main-title {
          font-size: ${pixelsToEm(39)};
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 0.64;
          letter-spacing: 0.4px;
          text-align: left;
          color: #161616;
        }

        .main-title__azure {
          color: ${styles.mainColor6};
        }

        .text-wrapper {
          font-size: ${pixelsToEm(16)};
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.56;
          letter-spacing: 0.2px;
          text-align: left;
          color: #555555;
        }

        .text-wrapper__title {
          font-size: ${pixelsToEm(32)};
          font-weight: bold;
          line-height: 1.08;
          letter-spacing: 0.4px;
          color: #000000;
          text-align: left;
        }

        .text-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25vw;
          min-height: 262px;
        }

        .text-box__bold {
          font-weight: bold;
          color: #000000;
        }

        .header-image-wrapper {
          max-width: 100%;
          height: 248px;
        }

        .contest-image-wrapper {
          max-width: 100%;
        }

        .separation-line {
          height: 2px;
          margin: 0px 5%;
          opacity: 0.5;
          background-color: #a6a6a6;
        }

        .extend-with-border {
          border: 2px solid ${styles.mainColor6};
          border-radius: 5px;
        }

        @media (max-width: ${mediaQueries.L}) {
          .main-title {
            font-size: ${pixelsToEm(32)};
            text-align: center;
            line-height: 1.25;
            letter-spacing: 0.3px;
          }

          .text-box {
            width: 90vw;
          }

          .image-box {
            width: 80vw;
          }

          .text-wrapper {
            padding: 5vh;
          }

          .text-wrapper__title {
            text-align: center;
          }

          .container__guest-or-host {
            flex-direction: column;
            justify-content: center;
          }

          .container__photo-contest {
            flex-direction: column-reverse;
            justify-content: center;
          }

          .separation-line {
            margin-bottom: 55px;
          }
        }
      `}
    </style>
  </Layout>
);

export default AdoptAJSer;
