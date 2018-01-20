import ScrollableAnchor from 'react-scrollable-anchor';
import { styles } from '../constants';

import Section from '../components/common/section';

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
  <div>
    <Section
      section={{ style: heroBcgImg }}
    >
      <ScrollableAnchor id={'adopt-a-jser'}>
        <div className="hero-text">
          <h1>Adopt a JavaScripter</h1>
        </div>
      </ScrollableAnchor>
    </Section>

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
    `}</style>
  </div>
);

module.exports = AdoptAJSerHero;
