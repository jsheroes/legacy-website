import React from 'react';

import Section from '../common/section';
import Link from '../common/link';

const AfterMovie = ({ year, videos }) => (
  <Section>
    <div className="after-movie-wrapper">
      <h2>JSHeroes {year} After Movie</h2>
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
      <h3>
        You can find all the recorded talks on our youtube channel
        <Link href={videos.playList} theme={Link.THEME_DARK}>
          <span className="link"> {year} playlist </span>
        </Link>
      </h3>
    </div>
    <style jsx>
      {`
        .after-movie-wrapper {
          text-align: center;
        }

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
          color: #0098ff;
          margin-bottom: 30px;
          font-size: 36px;
          padding-top: 30px;
        }
        h3 {
          padding-top: 20px;
        }

        .link {
          font-weight: 700;
        }
      `}
    </style>
  </Section>
);

export default AfterMovie;
