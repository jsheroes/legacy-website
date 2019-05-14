import Router from 'next/router';
import Link from './common/link';
import { styles, mediaQueries } from '../constants';

const PersonInfo = ({ WrappingElement, person, baseUrl, ...props }) => (
  <WrappingElement {...props} className="speaker-info-box">
    <img src={`${baseUrl}${person.img}`} alt={person.fullName} />
    <div className="speaker-hover" />
    <div className="speaker-details">
      <div className="speaker-name" aria-hidden="true">
        {person.fullName}
      </div>
      {person.position ? <div className="speaker-position">{person.position}</div> : null}
      {person.company ? <div className="speaker-company">{person.company}</div> : null}
    </div>
    <style jsx>
      {`
        .speaker-info-box {
          width: auto;
          position: relative;
          overflow: hidden;
          display: block;
          height: auto;
        }
        .speaker-info-box img {
          width: 100%;
          height: 100%;
          filter: grayscale(100%);
          display: block;
        }
        .speaker-hover {
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: 0.5s ease-out;
          width: 100%;
          background: rgba(0, 152, 255, 0.8) none repeat scroll 0 0 !important;
          z-index: 1;
        }
        .speaker-info-box.active .speaker-hover {
          opacity: 1;
        }
        .speaker-info-box.active .speaker-details {
          transform: translateY(-50%);
          opacity: 1;
        }

        .speaker-name {
          font-size: 24px;
          color: ${styles.mainColor3};
          margin: 10px 0;
          font-weight: bold;
        }
        .speaker-position,
        .speaker-company {
          font-size: 16px;
          color: ${styles.mainColor3};
          margin: 10px 0;
          font-weight: bold;
        }
        .speaker-details {
          position: absolute;
          top: 50%;
          transform: translateY(100px);
          transition: 0.2s ease-out;
          opacity: 0;
          width: 100%;
          z-index: 2;
          text-align: center;
        }

        @media (prefers-reduced-motion: reduce) {
          .speaker-details {
            transition: none;
          }

          .speaker-hover {
            transition: none;
          }
        }

        @media (min-width: ${mediaQueries.XS}) {
          .speaker-info-box:hover .speaker-hover,
          .speaker-info-box:focus .speaker-hover {
            opacity: 1;
          }
          .speaker-info-box:hover .speaker-details,
          .speaker-info-box:focus .speaker-details {
            transform: translateY(-50%);
            opacity: 1;
          }
        }
      `}
    </style>
  </WrappingElement>
);

const PersonSpotlight = ({ person, baseUrl, activeLink = false }) => (
  <div>
    {/*
      The tricky thing is that, in order to reuse the same styles
      for both interactive & non-interactive use cases
      and avoid leaking CSS, all elements involved need to be placed
      together in the same JSX structure due to how _styled-jsx_ works.
      (https://github.com/zeit/styled-jsx/issues/322)
      */}
    {activeLink ? (
      <PersonInfo
        // Required props.
        person={person}
        baseUrl={baseUrl}
        // Props to decorate the wrapper element.
        WrappingElement={Link}
        href={`/speakers?name=${person.permalink}`}
        as={`/speakers/${person.permalink}`}
        title={`Visit the page of ${person.fullName}`}
        onMouseEnter={() => {
          Router.prefetch(`/speakers?name=${person.permalink}`);
        }}
      />
    ) : (
      <PersonInfo
        // Required props.
        person={person}
        baseUrl={baseUrl}
        // Props to decorate the wrapper element.
        WrappingElement="div"
        tabIndex="0"
        role="button"
      />
    )}
  </div>
);

export default PersonSpotlight;
