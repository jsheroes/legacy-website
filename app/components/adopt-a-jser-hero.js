import React from 'react';
import Section from '../components/common/section';

import { mediaQueries, styles } from '../constants';

const heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/banners/adopt_a_jser_bcg.jpg)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '50vh',
};

const AdoptAJSerHero = () => (
  <Section section={{ style: heroBcgImg }}>
    <div className="hero-text">
      <h1>Adopt a JavaScripter</h1>
    </div>

    {/* language=CSS */}
    <style jsx>{`
      .hero-text {
        display: flex;
        height: ${heroBcgImg.height};
        align-items: center;
        justify-content: center;
      }
      h1 {
        padding-top: 50px;
        color: ${styles.mainColor3};
        font-family: Roboto, sans-serif;
        font-weight: 700;
      }

      @media (max-width: ${mediaQueries.L}) {
        .hero-text h1 {
          padding-top: 0;
        }
      }

      @media (max-width: ${mediaQueries.XS}) {
        .hero-text h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Section>
);

module.exports = AdoptAJSerHero;
