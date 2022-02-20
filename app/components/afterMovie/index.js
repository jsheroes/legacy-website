import React from 'react';

import Section from '../common/section';
import Link from '../common/link';
import { styles, mediaQueries } from '../../constants';

const AfterMovie = ({ year }) => {
  const { videos } = getData(year);

  return (
    <Section>
      <div className="after-movie-wrapper">
        <h2>Looking back at {year}</h2>
        <p>
          If you've never been to one of our events before, or you're just nostalgic thinking back,
          here's a little treat for you.
        </p>
        <div className="video-wrapper">
          <iframe
            aria-label="JSHeroes After Movie"
            title="JSHeroes After Movie"
            width="560"
            height="315"
            src={videos.afterMovie}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <p>
          You can find all the recorded talks on our youtube channel:
          <Link href={videos.playList} theme={Link.THEME_DARK}>
            <span className="link"> {year} playlist </span>
          </Link>
        </p>
      </div>
      <style jsx>
        {`
          .video-wrapper {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 */
            padding-top: 25px;
            height: 0;
          }

          .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          h2 {
            padding-top: 30px;
            font-size: 33px;
            color: ${styles.mainColor4};
            font-weight: 700;
          }

          p {
            width: 98%;
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 28px;
            font-weight: 300;
          }

          @media (min-width: ${mediaQueries.S}) {
            h2 {
              font-size: 33px;
            }
            p {
              font-size: 16px;
              line-height: 28px;
              margin-bottom: 20px;
            }
          }

          @media (min-width: ${mediaQueries.L}) {
            h2 {
              font-size: 46px;
            }
            p {
              font-size: 17px;
              line-height: 30px;
              margin-bottom: 30px;
            }
          }

          @media (min-width: ${mediaQueries.XL}) {
            h2 {
              font-size: 52px;
            }
            p {
              font-size: 18px;
              line-height: 32px;
              margin-bottom: 40px;
            }
          }

          .link {
            font-weight: 700;
          }
        `}
      </style>
    </Section>
  );
};

function getData(year) {
  // eslint-disable-next-line
  return require(`../../data/${year}`).default;
}

export default AfterMovie;
