import React from 'react';
import Section from '../../components/common/section';

const AfterMovie = () => (
  <Section>
    <div className="after-movie-wrapper">
      <h2>JSHeroes 2018 After Movie</h2>
      <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Zx2moTy-yAg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
      </div>
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
            margin-bottom : 30px;
            font-size: 36px;
        }
      `}
    </style>
  </Section>
);

export default AfterMovie;
